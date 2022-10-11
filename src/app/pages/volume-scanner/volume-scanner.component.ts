import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IGenericRequest } from 'src/app/interfaces/scanners/IGenericRequest';
import { VolumeAtTime } from 'src/app/interfaces/scanners/volume-at-time.interface';
import { VolumeAtTimeService } from 'src/app/services/socket/volume-at-time.service';

@Component({
  selector: 'app-volume-scanner',
  templateUrl: './volume-scanner.component.html',
  styleUrls: ['./volume-scanner.component.less']
})
export class VolumeScannerComponent implements OnInit {
  alert: IGenericRequest = {};
  alerts: IGenericRequest[] = [];
  data: VolumeAtTime = {} as VolumeAtTime;
  symbol: string = '';

  constructor(
    private volumeAtTimeService: VolumeAtTimeService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      this.symbol = param['symbol'];            
      this.volumeAtTimeService.data.subscribe((data: VolumeAtTime) => {
        if (!data.time || !data.volume) return;      
        this.data = data;
      });
    });  
  }

}
