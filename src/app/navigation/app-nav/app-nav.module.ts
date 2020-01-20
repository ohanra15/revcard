import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AppNavRoutingModule } from "./app-nav-routing.module";
import { AppNavComponent } from "./app-nav.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
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
  declarations: [AppNavComponent],
  imports: [
    CommonModule,
    AppNavRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule, MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatTooltipModule,
    FontAwesomeModule
  ],
  exports: [AppNavComponent],

})
export class AppNavModule { }
