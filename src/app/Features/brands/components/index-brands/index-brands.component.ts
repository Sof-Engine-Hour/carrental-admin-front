import { Component } from '@angular/core';
import { CreateBrandComponent } from '../create-brand/create-brand.component';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';

@Component({
  selector: 'app-index-brands',
  standalone: true,
  imports: [CreateBrandComponent, ButtonModule, SidebarModule],
  templateUrl: './index-brands.component.html',
  styleUrl: './index-brands.component.css',
})
export class IndexBrandsComponent {
  sidebarVisible: boolean = false;

  onBrandCreated() {
    this.sidebarVisible = false;
  }
}
