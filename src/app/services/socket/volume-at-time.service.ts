import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import Endpoint from 'src/app/constants/Endpoint';
import { VolumeAtTime } from 'src/app/interfaces/scanners/volume-at-time.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VolumeAtTimeService {
  socket: WebSocket = new WebSocket(`${environment.mainSocketServer}${Endpoint.SOCKET.volumeAtTime}`);
  data: BehaviorSubject<VolumeAtTime> = new BehaviorSubject<VolumeAtTime>({});

  constructor() { }

  listen() {
    this.onopen();
    this.onmessage();
    this.onclose();
    this.onerror();
  }

  onopen() {
    this.socket.onopen = (event) => {
      console.log('volume at time Socket Connected', event);
      
    };
  }

  onmessage() {
    this.socket.onmessage = (event) => {    
      this.data.next(JSON.parse(event.data));
    };
  }

  onclose() {
    this.socket.onclose = (event) => {
      console.log('volume at time Socket Closed', event);
    };
  }

  onerror() {
    this.socket.onerror = (event) => {
      console.log('volume at time Socket Error', event);
    };
  }

}
