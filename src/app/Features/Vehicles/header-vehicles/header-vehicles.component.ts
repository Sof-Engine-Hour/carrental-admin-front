import { Component } from '@angular/core';
import { SideBarComponent } from 'app/Features/Vehicles/side-bar/side-bar.component';
import { SidebarModule } from 'primeng/sidebar';
import { CreateVehiclesComponent } from '../create-vehicles/create-vehicles.component';

@Component({
  selector: 'app-header-vehicles',
  standalone: true,
  imports: [SideBarComponent, SidebarModule, CreateVehiclesComponent],
  templateUrl: './header-vehicles.component.html',
  styleUrl: './header-vehicles.component.css',
})
export class HeaderVehiclesComponent {
  sidebarVisible: boolean = false;
}
