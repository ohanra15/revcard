import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AppNavComponent } from "./app-nav.component";

const routes: Routes = [{ path: "", component: AppNavComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppNavRoutingModule { }
