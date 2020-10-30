import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CoreRoutingModule } from './core-routing.module';

import { LoginComponent } from './login/login.component';
import { UnauthorizedComponent } from './errors/unauthorized/unauthorized.component';

@NgModule({
  declarations: [
    LoginComponent,
    UnauthorizedComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CoreRoutingModule
  ]
})
export class CoreModule { }
