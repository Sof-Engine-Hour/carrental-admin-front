import { Component } from '@angular/core';
import { SideBarComponent } from 'app/Features/Vehicles/side-bar/side-bar.component';
import { VehiclesComponent } from 'app/routes/vehicles/vehicles.component';
import { TableVehiclesComponent } from '../../table-vehicles/table-vehicles.component';

@Component({
  selector: 'app-header-vehicles',
  standalone: true,
  imports: [SideBarComponent, TableVehiclesComponent],
  templateUrl: './header-vehicles.component.html',
  styleUrl: './header-vehicles.component.css',
})
export class HeaderVehiclesComponent {}
