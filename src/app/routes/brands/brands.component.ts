import { Component } from '@angular/core';
import { IndexBrandsComponent } from 'app/Features/brands/components/index-brands/index-brands.component';
import { TableBrandsComponent } from 'app/Features/brands/components/table-brands/table-brands.component';

@Component({
  selector: 'app-brands',
  standalone: true,
  imports: [IndexBrandsComponent, TableBrandsComponent],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.css',
})
export class BrandsComponent {}
