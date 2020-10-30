import { Component, OnInit, Inject  } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';

import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  loggedIn: boolean;

  constructor(
    public auth: AuthService,
    @Inject(DOCUMENT) public document: Document,
    private router: Router) {}

  ngOnInit(): void {
    this.auth.isAuthenticated$.subscribe(b => {
      this.loggedIn = b;
      console.log('loggedIn - ', this.loggedIn);
    });
  }
}
