import { Component } from '@angular/core';
import { VehiclesService } from '../services/vehicles.service';

@Component({
  selector: 'app-table-vehicles',
  standalone: true,
  imports: [],
  templateUrl: './table-vehicles.component.html',
  styleUrl: './table-vehicles.component.css',
})
export class TableVehiclesComponent {
  vehicles: any = [];

  constructor(private vehiclesService: VehiclesService) {}

  fetchVehicles(): void {
    this.vehiclesService.getVehicles(1, 10).subscribe(vehicles => {
      this.vehicles = vehicles;
    });
  }

  ngOnInit() {
    this.fetchVehicles();
  }
}
