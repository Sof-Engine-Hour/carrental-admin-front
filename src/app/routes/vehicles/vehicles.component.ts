import { Component } from '@angular/core';
import { HeaderVehicles } from 'app/Features/Vehicles';
import { TableVehiclesComponent } from 'app/Features/Vehicles/table-vehicles/table-vehicles.component';

@Component({
  selector: 'app-vehicles',
  standalone: true,
  imports: [HeaderVehicles, TableVehiclesComponent],
  templateUrl: './vehicles.component.html',
  styleUrl: './vehicles.component.css',
})
export class VehiclesComponent {}
