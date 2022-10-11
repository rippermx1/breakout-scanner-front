import { Component, OnInit } from '@angular/core';
import { Ikline } from 'src/app/interfaces/pivotlevel/Ikline';
import { PivotlevelService } from 'src/app/services/pivotlevel/pivotlevel.service';
import {
  createChart,
  CrosshairMode,
  Time,
  IChartApi,
  PriceLineOptions,
  LineStyle,
  IPriceLine,
} from 'lightweight-charts';
import { ILevel, TYPE, LEVEL_TYPE } from 'src/app/interfaces/pivotlevel/ILevel';
import { INTERVAL_LIST } from 'src/app/interfaces/pivotlevel/IFilter';
import { SocketService } from 'src/app/services/socket/socket.service';
import { IPivotAlert } from 'src/app/interfaces/pivotlevel/IPivotAlert';

@Component({
  selector: 'app-pivotlevel',
  templateUrl: './pivotlevel.component.html',
  styleUrls: ['./pivotlevel.component.less'],
})
export class PivotlevelComponent implements OnInit {
  klines: Ikline[] = [];
  levels: ILevel[] = [];
  chart: IChartApi = {} as IChartApi;
  candlestickSeries: any = null;
  filter = {
    symbol: 'BTCUSDT',
    interval: '1d',
    limit: 1000,
  };
  methodTypes = [TYPE.fractal, TYPE.window];
  methodTypeDefault = TYPE.fractal;
  lineLevelOptions: PriceLineOptions[] = [];
  priceLineLevels: IPriceLine[] = [];
  intervals = INTERVAL_LIST;
  symbols: string[] = [];
  supports: ILevel[] = [];
  resistances: ILevel[] = [];
  supportType = LEVEL_TYPE.support;
  resistanceType = LEVEL_TYPE.resistance;
  swingAlerts: IPivotAlert[] = [];
  intradayAlerts: IPivotAlert[] = [];


  constructor(
    private pivotlevelService: PivotlevelService,
    private socketService: SocketService
    ) {}
  
  reloadData() {
    this.updateWatermark();
    this.getKlines();
    this.getLevels();
    /* this.pivotlevelService.stopKlinesSocket().subscribe(() => {
      this.socketService.send(this.socketService.klineSocket, this.filter);
    });    */ 
  }

  selectSymbol(event: any): void {
    this.filter.symbol = event.target.value;    
    this.reloadData();
  }
  selectInterval(event: any): void {
    this.filter.interval = event.target.value;       
    this.reloadData();
  }
  selectType(event: any): void {
    this.methodTypeDefault = event.target.value;
    this.getLevels();
  }

  showDetails(alert: IPivotAlert) {
    this.filter.interval = alert.interval;
    this.filter.symbol = alert.symbol;
    this.reloadData();
  }

  updateWatermark() {
    this.chart.options().watermark.text = `${this.filter.symbol} ${this.filter.interval}`;
  }

  ngOnInit(): void {
    this.getKlines();
    this.getLevels();

    let symbols = localStorage.getItem('symbols');
    if (symbols) {
      this.symbols = JSON.parse(symbols) as string[];
    } else {
      this.getSymbols();
    }

    this.socketService.pivotLevelScannerSocket.onopen = () => {
      console.log('Socket opened');
      this.socketService.pivotLevelScannerSocket.send(JSON.stringify(this.filter));
    }

    this.socketService.pivotLevelScannerSocket.onmessage = (event) => {
      let alert = JSON.parse(event.data) as IPivotAlert;
      if (alert.interval === '1h') {
        this.swingAlerts.push(alert);
      } else if (alert.interval === '5m') {
        this.intradayAlerts.push(alert);
      }      
      console.log(alert);
    }

    this.socketService.pivotLevelScannerSocket.onerror = (event) => {
      console.log(event);
    }

    this.socketService.klineSocket.onmessage = (event) => {
      let kline = JSON.parse(event.data) as Ikline;
      // this.candlestickSeries.update({ time: kline.time, open: kline.open, high: kline.high, low: kline.low, close: kline.close });
      // console.log(kline);
    }
    this.socketService.klineSocket.onclose = (event) => {
      console.log(event);
      if (event) {
        console.log('Connection closed cleanly');        
      }
    }
  }

  getSymbols() {
    this.pivotlevelService.getSymbols().subscribe((resp) => {
      this.symbols = resp.data;
      localStorage.setItem('symbols', JSON.stringify(this.symbols));
    });
  }

  ngAfterViewInit(): void {
    const graph: HTMLElement = document.getElementById('graph') as HTMLElement;
    this.chart = createChart(graph, {
      width: graph.clientWidth,
      height: window.innerHeight - 50,
      layout: {
        textColor: '#d1d4dc',
        backgroundColor: '#000000',
      },
      grid: { horzLines: {visible:false}, vertLines: {visible:false} },
      crosshair: {
        mode: CrosshairMode.Normal,
      },
      watermark: {
        visible: true,
        fontSize: 34,
        horzAlign: 'center',
        vertAlign: 'center',
        color: 'rgba(255, 255, 255, 0.4)',
        text: `${this.filter.symbol} ${this.filter.interval}`,
      },
    });
    this.candlestickSeries = this.chart.addCandlestickSeries();
    this.chart.timeScale().fitContent();
  }

  identifyLevels(): void {
    this.supports = this.levels.filter(level => level.type === this.supportType);
    this.resistances = this.levels.filter(level => level.type === this.resistanceType);
  }

  symbolSelectedEvent(symbol: string) {
    this.filter.symbol = symbol;
    this.reloadData();
  }

  alertSelectedEvent(event: any) {
    const alert = JSON.parse(event) as IPivotAlert;
    this.filter.symbol = alert.symbol;
    this.filter.interval = alert.interval;
    this.reloadData();
  }

  getLevels(): void {
    this.clearLineLevels();
    this.pivotlevelService
      .getLevels(
        this.filter.symbol,
        this.filter.interval,
        this.filter.limit,
        this.methodTypeDefault
      )
      .subscribe((resp) => {
        this.levels = resp.data;
        this.levels.forEach((level) => {
          level.time = new Date(level.time as string).getTime() as Time;
        });
        this.identifyLevels();

        if (this.levels.length > 0) {
          this.levels.forEach((level) => {
            const line: PriceLineOptions = {
              price: level.value,
              color: (level.type.includes(this.supportType)) ? '#309f34' : '#a93232',
              lineWidth: 1,
              lineStyle: LineStyle.Dotted,
              axisLabelVisible: true,
              title: '',
              lineVisible: true,
            };
            this.lineLevelOptions.push(line);
          });
          this.loadLineLevels();
        }
      });
  }

  clearLineLevels() {
    if (this.priceLineLevels.length > 0) {
      let aux = this.priceLineLevels;
      aux.forEach((line) => {
        this.candlestickSeries.removePriceLine(line);
      });
      this.priceLineLevels = [];
      this.lineLevelOptions = [];      
    }
  }
  loadLineLevels() {
    this.lineLevelOptions.forEach((line) => {
      const aux = this.candlestickSeries.createPriceLine(line);
      this.priceLineLevels.push(aux);
    });    
  }

  getKlines(): void {
    this.pivotlevelService
      .getKlines(this.filter.symbol, this.filter.interval, this.filter.limit)
      .subscribe((resp) => {
        this.klines = resp.data;
        this.klines.forEach((kline) => {
          kline.time = new Date(kline.time as string).getTime() as Time;
        });
        if (this.klines.length > 0) {
          this.candlestickSeries.setData(this.klines);
        }
      });
  }
}
