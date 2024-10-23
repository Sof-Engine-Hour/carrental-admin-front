import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BrandResponse, CarRequest, CarResponse, ModelResponse, PaginatedCarResponse } from './car';
import { map, Observable } from 'rxjs';
import { environment } from '@env/environment';



@Injectable({
  providedIn: 'root',
})
export class CarService {
  private readonly http = inject(HttpClient);

  constructor() {}

  saveCar(cars: CarRequest[]): Observable<CarResponse[]> {
    return this.http.post<CarResponse[]>(`${environment.backend1}/vehicules`, cars);
  }

  getListOfBrands(): Observable<BrandResponse[]> {
    return this.http.get<BrandResponse[]>(`${environment.backend1}/brands`);
  }

  // /brands/{id}/models

  getListOfModels(id: number): Observable<ModelResponse[]> {
    return this.http.get<ModelResponse[]>(`${environment.backend1}/brands/${id}/models`);
  }


  getListOfCars(page : number , size :number) : Observable<CarResponse[]> {

    const params = new HttpParams()
    .set('page', page.toString())
    .set('size', size.toString());

    return this.http.get<PaginatedCarResponse>( `${environment.backend1}/vehicules`, { params })
                                      .pipe(
                                        map(paginatedCarResponse => paginatedCarResponse.content)
                                      ) ;
  }
}
