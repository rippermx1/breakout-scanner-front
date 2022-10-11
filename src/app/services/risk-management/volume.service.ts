import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Endpoint from 'src/app/constants/Endpoint';
import { IVolumeRisk, IVolumeRiskResponse } from 'src/app/interfaces/calculators/IVolumeRisk';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VolumeService {

  constructor(
    private http: HttpClient
  ) { }

  getVolumeByRisk(form: IVolumeRisk): Observable<IVolumeRiskResponse> {
    const endpoint = `${environment.apiUrl}${Endpoint.MICROSERVICE.volumeRisk}`;
    const request = form;
    return this.http.post<IVolumeRiskResponse>(endpoint, request);
  }
}
