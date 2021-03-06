import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DashboardRoutingModule } from "./dashboard-routing.module";
import { DashboardComponent } from "./dashboard.component";
import { FlexLayoutModule } from "@angular/flex-layout";
import {
  MatAutocompleteModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatPaginatorModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatCardModule,
  MatExpansionModule,
  MatButtonModule
} from "@angular/material";
@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatAutocompleteModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatCardModule,
    MatExpansionModule,
    MatButtonModule,
    FlexLayoutModule
  ]
})
export class DashboardModule { }
