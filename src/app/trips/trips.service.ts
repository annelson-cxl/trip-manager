import { Injectable } from '@angular/core';

import { Trip } from '../shared/models/trip';

@Injectable()
export class TripsService {

  private _trip: Trip;

  constructor() { }

  get trip(): Trip {
    if (!this._trip) {
      const tmpTrip = sessionStorage.getItem('TripsService.trip');
      this._trip = (!tmpTrip) ? new Trip() : Object.assign(new Trip, JSON.parse(tmpTrip));
    }
    return this._trip;
  }

  set trip(trip: Trip) {
    this._trip = trip;
    sessionStorage.setItem('TripsService.trip', JSON.stringify(this._trip));
  }
}
