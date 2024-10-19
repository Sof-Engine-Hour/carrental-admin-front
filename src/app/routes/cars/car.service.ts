import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BrandResponse, CarRequest, CarResponse, ModelResponse } from './car';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  
  private readonly http = inject(HttpClient)

  constructor() { }

  saveCar(cars : CarRequest []) : Observable<CarResponse[]> {
    return this.http.post<CarResponse[]>(`${environment.backend1}/vehicules`, cars) ;
  }

  getListOfBrands() : Observable<BrandResponse[]>{
    return this.http.get<BrandResponse[]>(`${environment.backend1}/brands`) ;
  }

  // /brands/{id}/models

  getListOfModels(id : number) : Observable<ModelResponse[]>{
    return this.http.get<ModelResponse[]>(`${environment.backend1}/brands/${id}/models`) ;
  }
}
