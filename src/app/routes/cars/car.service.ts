import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Car } from './car';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  
  private readonly http = inject(HttpClient)

  constructor() { }

  saveCar(cars : Car []) : Observable<Car[]> {
    return this.http.post<Car[]>(environment.backend1 + "/vehicules" , cars) ;
  }
}
