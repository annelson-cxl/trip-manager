import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '@auth0/auth0-angular';

import { User } from '../../shared/models/User';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user: User;

  constructor(
    public auth: AuthService,
    private router: Router) {

      this.user = new User();
    }

  ngOnInit(): void {
    this.auth.user$.subscribe(resp => {
      console.log(resp);
      this.user.email = resp.email;
      this.user.name = resp.name;
      this.user.nickName = resp.nickname;
      this.user.lastUpdated = resp.updated_at;
      this.user.picture = resp.picture;
    });
  }

}
