import { Component } from '@angular/core';
import { SideBarComponent } from 'app/Features/Vehicles/side-bar/side-bar.component';
import { SidebarModule } from 'primeng/sidebar';

@Component({
  selector: 'app-header-vehicles',
  standalone: true,
  imports: [SideBarComponent, SidebarModule],
  templateUrl: './header-vehicles.component.html',
  styleUrl: './header-vehicles.component.css',
})
export class HeaderVehiclesComponent {
  sidebarVisible: boolean = false;
}
