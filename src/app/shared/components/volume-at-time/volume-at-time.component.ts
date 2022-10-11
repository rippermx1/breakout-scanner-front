import { Component, Input, OnInit } from '@angular/core';
import { createChart, CrosshairMode, IChartApi, Time } from 'lightweight-charts';
import { VolumeAtTime } from 'src/app/interfaces/scanners/volume-at-time.interface';
import { VolumeAtTimeService } from 'src/app/services/socket/volume-at-time.service';

@Component({
  selector: 'app-volume-at-time',
  templateUrl: './volume-at-time.component.html',
  styleUrls: ['./volume-at-time.component.less']
})
export class VolumeAtTimeComponent implements OnInit {
  chart: IChartApi = {} as IChartApi;
  lineSeries: any = null;
  @Input() symbol: string = '';

  constructor(
    private volumeAtTimeService: VolumeAtTimeService
  ) { }

  ngOnInit(): void {
    this.volumeAtTimeService.socket.onopen = (event) => {
      console.log('volume at time Socket Connected', event);
      this.volumeAtTimeService.socket.send(JSON.stringify({symbol: this.symbol}));
    };

    this.volumeAtTimeService.socket.onmessage = (event) => {
      const data = JSON.parse(event.data) as VolumeAtTime;
      if (!data.time || !data.volume) return;
      this.lineSeries.update({time: data.time, value: data.volume});
      this.chart.timeScale().fitContent();     
    };
  }

  ngAfterViewInit(): void {
    const graph: HTMLElement = document.getElementById('volume-at-time') as HTMLElement;
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
      timeScale: {
        timeVisible: true,
        secondsVisible: true,
      },
    });
    this.lineSeries = this.chart.addLineSeries();
    this.chart.timeScale().fitContent();
  }

}
