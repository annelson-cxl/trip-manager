import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CoreRoutingModule } from './core-routing.module';

import { UnauthorizedComponent } from './errors/unauthorized/unauthorized.component';
import { NavComponent } from './nav/nav.component';
import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    UnauthorizedComponent,
    NavComponent,
    LandingComponent,
    NavComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CoreRoutingModule
  ],
  exports: [
    NavComponent
  ]
})
export class CoreModule { }
