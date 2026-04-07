import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { QuantityInputDTO, QuantityMeasurementDTO } from '../models/quantity.models';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class QuantityService {

  private readonly API = environment.apiBaseUrl + environment.apiVersion + '/quantities';

  constructor(private http: HttpClient) {}

  compare(input: QuantityInputDTO): Observable<QuantityMeasurementDTO> {
    return this.http.post<QuantityMeasurementDTO>(`${this.API}/compare`, input);
  }

  convert(input: QuantityInputDTO): Observable<QuantityMeasurementDTO> {
    return this.http.post<QuantityMeasurementDTO>(`${this.API}/convert`, input);
  }

  add(input: QuantityInputDTO): Observable<QuantityMeasurementDTO> {
    return this.http.post<QuantityMeasurementDTO>(`${this.API}/add`, input);
  }

  subtract(input: QuantityInputDTO): Observable<QuantityMeasurementDTO> {
    return this.http.post<QuantityMeasurementDTO>(`${this.API}/subtract`, input);
  }

  divide(input: QuantityInputDTO): Observable<QuantityMeasurementDTO> {
    return this.http.post<QuantityMeasurementDTO>(`${this.API}/divide`, input);
  }
}
