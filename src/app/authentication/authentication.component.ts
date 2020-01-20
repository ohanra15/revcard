import { ForgotpasswordComponent } from "./forgotpassword/forgotpassword.component";
import { environment } from "./../../environments/environment";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import {  MatDialog } from "@angular/material";
import { AuthenticationService } from "./../services/authentication.service";
@Component({
  selector: "app-authentication",
  templateUrl: "./authentication.component.html",
  styleUrls: ["./authentication.component.css"]
})
export class AuthenticationComponent implements OnInit {
  dialogRef: any;
  env: any = environment;
  useToken: boolean = false;
  loginMode: boolean = true;
  captchaDisable: boolean = true;
  constructor(private router:  Router, public dialog: MatDialog, public authService: AuthenticationService ) { }

  ngOnInit() {
  }

  login() {
    // need to Call API for Authentic user
    this.loginMode = false;
  }

  forgot(data: {}) {
    const dialogRef = this.dialog.open(ForgotpasswordComponent, {
      disableClose: true,
      data: data,
    });
    dialogRef.afterClosed().subscribe(result => {});
  }

  showToken(uset) {
    this.useToken = uset;
  }

  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
    this.captchaDisable= false;
}

securityLogin() {
  // need to Call API for Authentic user
  localStorage.setItem("valid-user", "true");
  this.router.navigate(["/dashboard"]);
  // loginMode = true;
}

backLogin(){
  this.loginMode = true;
  this.captchaDisable= true;
}
}
