import { Component } from '@angular/core';
import { VehiclesService } from '../services/vehicles.service';
import { TableModule } from 'primeng/table';
import { DeleteDialogComponent } from 'app/Features/common/delete-dialog/delete-dialog.component';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-table-vehicles',
  standalone: true,
  imports: [TableModule, DeleteDialogComponent],
  templateUrl: './table-vehicles.component.html',
  styleUrls: ['./table-vehicles.component.css'],
  providers: [DialogService], // Ensure DialogService is provided
})
export class TableVehiclesComponent {
  vehicles: any = null;
  totalRecords: number = 0;
  rows: number = 5;

  constructor(
    private vehiclesService: VehiclesService,
    private dialogService: DialogService
  ) {}

  fetchVehicles(page: number = 0, size: number = this.rows): void {
    this.vehiclesService.getVehicles(page, size).subscribe(res => {
      this.vehicles = res.content;
    });
  }

  onPageChange(event: any): void {
    const page = event.first / event.rows;
    this.fetchVehicles(page, event.rows);
  }

  ngOnInit() {
    this.fetchVehicles();
  }

  // Open the delete dialog
  confirmDelete(vehicle: any) {
    const ref: DynamicDialogRef = this.dialogService.open(DeleteDialogComponent, {
      header: 'Confirm Deletion',
      width: '25rem',
      data: { vehicle },
    });
    console.log(vehicle.id);

    ref.onClose.subscribe((confirmed: boolean) => {
      if (confirmed) {
        console.log('confirmed');
        this.vehiclesService.deleteVehicles(vehicle.id);
        // this.vehiclesService.deleteVehicles(vehicle.id);
        // this.fetchVehicles(0, 100);
      }
    });
  }
}
