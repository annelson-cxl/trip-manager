import { Component, OnInit } from '@angular/core';

import { TripsService } from '../trips.service';
import { Trip } from '../../shared/models/trip';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  trip: Trip;

  constructor(private tripService: TripsService) { }

  ngOnInit() {
    this.trip = this.tripService.trip;
    console.log("selected trip: ", this.trip);
  }

}
