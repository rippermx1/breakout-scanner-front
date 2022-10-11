import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IGenericRequest } from 'src/app/interfaces/scanners/IGenericRequest';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class VolumeScannerService {
  socket: WebSocket = new WebSocket(environment.volumeScannerSocketUrl);
  alert: BehaviorSubject<IGenericRequest> = new BehaviorSubject<IGenericRequest>({});
  alertSelected: BehaviorSubject<IGenericRequest> = new BehaviorSubject<IGenericRequest>({});

  constructor() {}

  listen() {
    this.onopen();
    this.onmessage();
    this.onclose();
    this.onerror();
  }

  onopen() {
    this.socket.onopen = (event) => {
      console.log('Volume Scanner Socket Connected', event);
    };
  }

  onmessage() {
    this.socket.onmessage = (event) => {      
      this.alert.next(JSON.parse(event.data));
    };
  }

  onclose() {
    this.socket.onclose = (event) => {
      console.log('Volume Scanner Socket Closed', event);
    };
  }

  onerror() {
    this.socket.onerror = (event) => {
      console.log('Volume Scanner Socket Error', event);
    };
  }
}
