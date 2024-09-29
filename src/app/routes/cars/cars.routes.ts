import { Routes } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { FormComponent } from './form/form.component';

export const routes: Routes = [
  { path: 'overview', component: OverviewComponent },
  {path: 'add-car' , component:FormComponent}
];
