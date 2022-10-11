import { Injectable } from '@angular/core';
import Endpoint from 'src/app/constants/Endpoint';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  public pivotLevelScannerSocket = new WebSocket(`${environment.pivotLevelScannerSocketUrl}`);
  public volumeScannerSocketUrl: WebSocket = new WebSocket(environment.volumeScannerSocketUrl);
  public klineSocket = new WebSocket(`${environment.mainSocketServer}${Endpoint.SOCKET.klines}`);
  constructor() {}
}
