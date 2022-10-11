import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Endpoint from 'src/app/constants/Endpoint';
import { IklineResponse } from 'src/app/interfaces/pivotlevel/Ikline';
import { ILevelResponse, TYPE } from 'src/app/interfaces/pivotlevel/ILevel';
import { ISymbolResponse } from 'src/app/interfaces/pivotlevel/ISymbol';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PivotlevelService {
  constructor(private http: HttpClient) {}

  getKlines(
    symbol: string,
    interval: string,
    limit: number,
    indicators?: boolean
  ): Observable<IklineResponse> {
    const endpoint = `${environment.apiUrl}${Endpoint.MICROSERVICE.klines}`;
    const request = {
      symbol: symbol,
      interval: interval,
      limit: limit,
      indicators: indicators,
    };
    return this.http.post<IklineResponse>(endpoint, request);
  }

  getLevels(
    symbol: string,
    interval: string,
    limit: number,
    type: string
  ): Observable<ILevelResponse> {
    let endpoint = '';
    switch (type) {
      case TYPE.fractal:
        endpoint = `${environment.apiUrl}${Endpoint.MICROSERVICE.fractalLevels}`;
        break;
      case TYPE.window:
        endpoint = `${environment.apiUrl}${Endpoint.MICROSERVICE.windowLevels}`;
        break;
    }
    const request = {
      symbol: symbol,
      interval: interval,
      limit: limit,
    };
    return this.http.post<ILevelResponse>(endpoint, request);
  }

  getSymbols(): Observable<ISymbolResponse> {
    const endpoint = `${environment.apiUrl}${Endpoint.MICROSERVICE.symbols}`;
    return this.http.get<ISymbolResponse>(endpoint);
  }

  stopKlinesSocket() {
    const endpoint = `${environment.apiUrl}${Endpoint.SOCKET.stopKlines}`;
    return this.http.get(endpoint);
  }
  
}
