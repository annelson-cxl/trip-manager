import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'core',
    loadChildren: 'app/core/core.module#CoreModule'
  },
  {
    path: 'trips',
    loadChildren: 'app/trips/trips.module#TripsModule'
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/core'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
