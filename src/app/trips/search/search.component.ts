import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Trip } from '../../shared/models/trip';
import { TripsService } from '../trips.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  trip: Trip;
  trips: Array<Trip>;
  constructor(private tripsService: TripsService,
              private router: Router) {
    this.trips = new Array<Trip>();
  }

  ngOnInit() {
    this.trips.push({'bookingDate': 1604018402, 'confirmationNumber': 52933, 'recordLocator': 'OINSOE', 'startDate': 1610671202, 'endDate': 1611103202, 'status': 'good'});
    this.trips.push({'bookingDate': 1604018402, 'confirmationNumber': 98972, 'recordLocator': 'YZZDMF', 'startDate': 1610671202, 'endDate': 1611103202, 'status': 'good'});
    this.trips.push({'bookingDate': 1604018402, 'confirmationNumber': 92721, 'recordLocator': 'ALOGPS', 'startDate': 1610671202, 'endDate': 1611103202, 'status': 'good'});
  }

  getSelectedTrip(event): void {

    console.log('selected row: ', event);
    this.tripsService.trip = event;
    this.router.navigate(['/trips/view']);
   }


}
