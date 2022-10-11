import { Component, Input, OnInit } from '@angular/core';
import { createChart, CrosshairMode, IChartApi, IPriceLine, LineData, LineStyle, PriceLineOptions, Time } from 'lightweight-charts';
import { Ikline } from 'src/app/interfaces/pivotlevel/Ikline';
import { ILevel, LEVEL_TYPE, TYPE } from 'src/app/interfaces/pivotlevel/ILevel';
import { PivotlevelService } from 'src/app/services/pivotlevel/pivotlevel.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.less']
})
export class ChartComponent implements OnInit {
  klines: Ikline[] = [];
  levels: ILevel[] = [];
  chart: IChartApi = {} as IChartApi;
  candlestickSeries: any = null;
  filter = {
    symbol: 'BTCUSDT',
    interval: '1d',
    limit: 1000,
  };
  methodTypeDefault = TYPE.fractal;
  lineLevelOptions: PriceLineOptions[] = [];
  priceLineLevels: IPriceLine[] = [];
  supportType = LEVEL_TYPE.support;  
  @Input() symbol: string = '';
  @Input() interval: string = '';
  @Input() graphId: string = '';
  @Input() indicators: boolean = false;

  LINE_COLOR = {
    red: 'rgba(255, 0, 0, 1)',
    green: 'rgba(0, 255, 0, 1)',
    blue: 'rgba(0, 0, 255, 1)'
  }


  constructor(
    private pivotlevelService: PivotlevelService    
  ) { }

  ngOnInit(): void {
    this.filter.symbol = this.symbol;
    this.filter.interval = this.interval;
    if (this.symbol) {
      this.getKlines(this.indicators);
      this.getLevels();
    }
  }

  reloadData() {
    this.getKlines(this.indicators);
    this.getLevels();
    this.updateWatermark();
  }

  ngAfterViewInit(): void {
    const graph: HTMLElement = document.getElementById(this.graphId) as HTMLElement;
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
        
        if (this.levels.length > 0) {
          this.levels.forEach((level) => {
            const line: PriceLineOptions = {
              price: level.value,
              color: '#fff',
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

  updateWatermark() {
    this.chart.options().watermark.text = `${this.filter.symbol} ${this.filter.interval}`;
  }

  getKlines(indicators: boolean): void {
    this.pivotlevelService
      .getKlines(this.filter.symbol, this.filter.interval, this.filter.limit, indicators)
      .subscribe((resp) => {
        this.klines = resp.data;
        if (this.klines.length > 0) {
          if (indicators) {
            let sma200List = this.klines.map((kline) => {return { 'time': kline.time, 'value': kline.sma_200}}) as LineData[];
            let sma50List = this.klines.map((kline) => {return { 'time': kline.time, 'value': kline.sma_50}}) as LineData[];
            let ema13List = this.klines.map((kline) => {return { 'time': kline.time, 'value': kline.ema_13}}) as LineData[];
            
            const sma200Line = this.chart.addLineSeries({ color: this.LINE_COLOR.red, lineWidth: 2 });
            sma200Line.setData(sma200List);
            const sma50Line = this.chart.addLineSeries({ color: this.LINE_COLOR.blue, lineWidth: 2 });
            sma50Line.setData(sma50List);
            const ema13Line = this.chart.addLineSeries({ color: this.LINE_COLOR.green, lineWidth: 2 });
            ema13Line.setData(ema13List);
          }
          if (this.filter.interval === '5m') {
            let vwapList = this.klines.map((kline) => {return { 'time': kline.time, 'value': kline.vwap}}) as LineData[];
            const vwapLine = this.chart.addLineSeries({ color: this.LINE_COLOR.blue, lineWidth: 2 });
            vwapLine.setData(vwapList); 
            
            this.klines.forEach((kline) => {
              // kline.time = this.subtractTimeFromDate(new Date(kline.time as string), 3).getTime() as Time;
              
              console.log(new Date(kline.time as string), kline.open);  
            });
          }

          try {            
            this.candlestickSeries.setData(this.klines);
          } catch (error) {
            console.log(error);
          }          
        }
      });
  }

  subtractTimeFromDate(objDate: Date, intHours: number) {
    const numberOfMlSeconds = objDate.getTime();
    let addMlSeconds = (intHours * 60) * 60000;
    return new Date(numberOfMlSeconds - addMlSeconds);
}

}
