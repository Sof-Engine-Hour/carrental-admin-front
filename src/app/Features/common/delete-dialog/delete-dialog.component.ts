import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-delete-dialog',
  standalone: true,
  imports: [ButtonModule, DialogModule],
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.css'],
})
export class DeleteDialogComponent {
  visible: boolean = false;

  constructor(public ref: DynamicDialogRef) {}

  showDialog() {
    this.visible = true;
  }

  confirmDelete() {
    this.visible = false;
    this.ref.close(true);
  }

  cancel() {
    this.visible = false;
    this.ref.close(false);
  }
}
