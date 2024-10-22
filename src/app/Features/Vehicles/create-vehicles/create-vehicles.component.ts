import { Component, EventEmitter, Input, Output } from '@angular/core';
import { VehiclesService } from '../services/vehicles.service';
import { VehicleType } from '../type';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-vehicles',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './create-vehicles.component.html',
  styleUrl: './create-vehicles.component.css',
})
export class CreateVehiclesComponent {
  vehicleForm: FormGroup;
  @Output() fetchData = new EventEmitter<void>();
  @Input() selectedVehicleId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private vehiclesService: VehiclesService,
    private snackBar: MatSnackBar
  ) {
    this.vehicleForm = this.fb.group({
      matricule: ['', Validators.required],
      model: ['', [Validators.required, Validators.min(1)]],
      color: ['', Validators.required],
      mileage: ['', [Validators.required, Validators.min(0)]],
      year: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
    });
  }

  onSubmit() {
    if (this.vehicleForm.valid) {
      console.log('submit');

      this.vehiclesService.CreateVehicle(this.vehicleForm.value).subscribe(
        response => {
          this.fetchData.emit();
          this.snackBar.open('Vehicle created successfully!', 'Close', {
            duration: 3000,
            panelClass: ['success-snackbar'],
          });
        },
        error => {
          console.error('Error creating vehicle:', error);
          this.snackBar.open('Failed to create vehicle. Please try again.', 'Close', {
            duration: 3000,
            panelClass: ['error-snackbar'],
          });
        }
      );
    } else {
      console.log('Form not valid!');
    }
  }

  ngOnInit() {
    console.log('test');

    console.log('from create ', this.selectedVehicleId);
  }
  get f() {
    return this.vehicleForm.controls;
  }
}
