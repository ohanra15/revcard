import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginDashboardRoutingModule } from './login-dashboard-routing.module';
import { LoginDashboardComponent } from './login-dashboard.component';

import {
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatButtonModule, MatToolbarModule,
  MatIconModule,
  MatMenuModule,
  MatSidenavModule,
  MatListModule,
  MatTooltipModule
} from "@angular/material";
@NgModule({
  declarations: [LoginDashboardComponent],
  imports: [
    CommonModule,
    LoginDashboardRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule, MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatTooltipModule
  ]
})
export class LoginDashboardModule { }
