import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { DropdownModule } from 'primeng/dropdown';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { CreateVehiclesComponent } from '../create-vehicles/create-vehicles.component';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [
    MatInputModule,
    InputTextModule,
    FloatLabelModule,
    DropdownModule,
    CreateVehiclesComponent,
  ],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css',
})
export class SideBarComponent {}
