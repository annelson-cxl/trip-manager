import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  loggedIn: boolean;

  constructor(
    public auth: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    this.auth.isAuthenticated$.subscribe(b => {
      this.loggedIn = b;
      console.log('loggedIn - ', this.loggedIn);
    });
  }

}
