import { Routes } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { FormComponent } from './form/form.component';
import { IndexCarsComponent } from './index-cars/index-cars.component';
import { CreateCarsComponent } from './create-cars/create-cars.component';

export const routes: Routes = [
  { path: '', component: IndexCarsComponent },
  { path: 'create', component: CreateCarsComponent },
  { path: 'overview', component: OverviewComponent },
  { path: 'add-car', component: FormComponent },
];
