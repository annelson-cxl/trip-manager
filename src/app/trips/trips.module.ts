import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TripsRoutingModule } from './trips-routing.module';
import { SearchComponent } from './search/search.component';
import { ViewComponent } from './view/view.component';
import { SearchResultsTableComponent } from './search/search-results-table/search-results-table.component';
import { TripsService } from './trips.service';

@NgModule({
  declarations: [
    SearchComponent,
    ViewComponent,
    SearchResultsTableComponent
  ],
  imports: [
    CommonModule,
    TripsRoutingModule
  ],
  providers: [
    TripsService
  ]
})
export class TripsModule { }
