
import { BrowserModule } from "@angular/platform-browser";
import { NgModule, Provider, forwardRef } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "../environments/environment";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FlexLayoutModule } from "@angular/flex-layout";
import { ReactiveFormsModule } from "@angular/forms";
import {
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatButtonModule, MatToolbarModule,
  MatIconModule,
  MatMenuModule,
  MatSidenavModule,
  MatListModule,
  MatTooltipModule,
  MatDialogModule,
  MatCheckboxModule 
} from "@angular/material";
import { AppNavModule } from "./navigation/app-nav/app-nav.module";
import { ForgotpasswordComponent } from "./authentication/forgotpassword/forgotpassword.component";
import { ApiInterceptor } from "./api.interceptor";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

export const API_INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  useExisting: forwardRef(() => ApiInterceptor),
  multi: true,
};

@NgModule({
  declarations: [
    AppComponent,
    ForgotpasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatTooltipModule,
    ServiceWorkerModule.register("ngsw-worker.js", { enabled: environment.production }),
    AppNavModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    HttpClientModule,
    MatCheckboxModule,
    FontAwesomeModule
  ],
  providers: [API_INTERCEPTOR_PROVIDER, ApiInterceptor],
  bootstrap: [AppComponent],
  entryComponents: [
    ForgotpasswordComponent
 ]
})
export class AppModule { }
