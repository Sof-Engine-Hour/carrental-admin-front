import { Component } from '@angular/core';
import { HeaderVehicles } from 'app/Features/Vehicles';

@Component({
  selector: 'app-vehicles',
  standalone: true,
  imports: [HeaderVehicles],
  templateUrl: './vehicles.component.html',
  styleUrl: './vehicles.component.css',
})
export class VehiclesComponent {}
