import { Component } from '@angular/core';
import { BrandsService } from '../../services/brands.service';
import { Brand } from '../../types/type';
import { MatTableModule } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { CreateBrandComponent } from '../create-brand/create-brand.component';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-table-brands',
  standalone: true,
  imports: [MatTableModule, CreateBrandComponent, SidebarModule, ButtonModule],
  templateUrl: './table-brands.component.html',
  styleUrl: './table-brands.component.css',
})
export class TableBrandsComponent {
  brands: Brand[] = [];
  private brandsSub!: Subscription;
  sidebarVisible: boolean = false;
  selectedBrandId: number | null = null;
  displayedColumns: string[] = ['Id', 'name', 'website', 'action'];

  isSidebarOpen = false;

  constructor(private brandsService: BrandsService) {}
  fetchBrands() {
    this.brandsService.getBrands().subscribe(brands => {
      this.brands = brands;
    });
  }
  ngOnInit() {
    this.fetchBrands();
    this.brandsSub = this.brandsService.getBrandsUpdatedListener().subscribe(() => {
      this.fetchBrands();
    });
  }

  ngOnDestroy(): void {
    if (this.brandsSub) {
      this.brandsSub.unsubscribe();
    }
  }

  openSidebar(id: number) {
    this.selectedBrandId = id;
    this.sidebarVisible = true;
  }
}
