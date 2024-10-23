import { Component } from '@angular/core';
import { HeaderVehicles } from 'app/Features/Vehicles';
import { CreateVehiclesComponent } from 'app/Features/Vehicles/create-vehicles/create-vehicles.component';
import { TableVehiclesComponent } from 'app/Features/Vehicles/table-vehicles/table-vehicles.component';
import { SideBarComponent } from 'app/Features/Vehicles/side-bar/side-bar.component';
import { SidebarModule } from 'primeng/sidebar';
import { VehicleType } from 'app/Features/Vehicles/type';
import { VehiclesService } from 'app/Features/Vehicles/services/vehicles.service';

@Component({
  selector: 'app-vehicles',
  standalone: true,
  imports: [
    HeaderVehicles,
    TableVehiclesComponent,
    CreateVehiclesComponent,
    SideBarComponent,
    SidebarModule,
  ],
  templateUrl: './vehicles.component.html',
  styleUrl: './vehicles.component.css',
})
export class VehiclesComponent {
  sidebarVisible: boolean = false;
  vehicles: VehicleType[] | null = null;
  totalRecords: number = 0;
  rows: number = 5;
  currentPage: number = 0;
  selectedVehicleId: number = 0;

  constructor(private vehiclesService: VehiclesService) {}

  fetchVehicles(page: number = 0, size: number = this.rows): void {
    this.sidebarVisible = false;
    this.vehiclesService.getVehicles(page, size).subscribe(res => {
      this.vehicles = res.content;
      this.totalRecords = res.totalElements;
    });
  }

  updateSelectedVehicleId(id: number) {
    this.selectedVehicleId = id;
    this.sidebarVisible = true;
  }
  ngOnInit() {
    this.fetchVehicles();
  }

  CreateNewVehicle() {
    this.selectedVehicleId = 0;
    this.sidebarVisible = true;
  }
}
