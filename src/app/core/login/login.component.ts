import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Login } from '../../shared/models/login';
import { User } from '../../shared/models/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login = new Login();

  constructor(private router: Router) { }

  ngOnInit() {
  }

  doLogin(): void {
    console.log('any credentials will do for now, will inplement security in a bit');

    if (this.login.username == 'franky' && this.login.password == 'poopoopeepee') {

      const user = new User('fatstacks', 'franky', 'fatstacks', 'franky@fatstacks.com');

      this.router.navigate(['/trips/search']);
    } else {
      this.router.navigate(['/core/errors/unauthorized']);
    }

  }

}
