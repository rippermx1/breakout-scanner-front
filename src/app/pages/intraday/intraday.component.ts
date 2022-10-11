import { Component, OnInit } from '@angular/core';
import { IPivotAlert } from 'src/app/interfaces/pivotlevel/IPivotAlert';
import { SocketService } from 'src/app/services/socket/socket.service';

@Component({
  selector: 'app-intraday',
  templateUrl: './intraday.component.html',
  styleUrls: ['./intraday.component.less']
})
export class IntradayComponent implements OnInit {
  pivotAlerts: IPivotAlert[] = [];
  volumeAlerts: any[] = [];

  constructor(
    private socketService: SocketService
  ) { }

  ngOnInit(): void {
    this.socketService.pivotLevelScannerSocket.onopen = () => {
        console.log('connected to pivot level socket');
    };
    this.socketService.pivotLevelScannerSocket.onmessage = (event) => {
      let alert = JSON.parse(event.data) as IPivotAlert;
      if (alert.interval === '5m') {
        this.pivotAlerts.push(alert);
      }      
    }
    this.socketService.volumeScannerSocketUrl.onopen = () => {
      console.log('connected to pivot level socket');
    };
    this.socketService.volumeScannerSocketUrl.onmessage = (event) => {
      let alert = JSON.parse(event.data);
      this.volumeAlerts.push(alert);     
    }
  }

  alertSelectedEvent(alert: any) {
    console.log(alert);
  }

}
