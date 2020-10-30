import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'core',
    loadChildren: () => import('app/core/core.module').then(m => m.CoreModule)
  },
  {
    path: 'trips',
    loadChildren: () => import('app/trips/trips.module').then(m => m.TripsModule)
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
