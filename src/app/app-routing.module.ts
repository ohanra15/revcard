import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";


const routes: Routes = [
  { path: "login", loadChildren: () => import("./authentication/authentication.module").then(m => m.AuthenticationModule) },
  { path: "dashboard", loadChildren: () => import("./dashboard/dashboard.module").then(m => m.DashboardModule) },
  { path: "app-nav", loadChildren: () => import("./navigation/app-nav/app-nav.module").then(m => m.AppNavModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
