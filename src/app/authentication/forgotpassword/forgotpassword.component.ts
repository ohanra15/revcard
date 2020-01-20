import { environment } from './../../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
// import { MatSnackBar } from '@angular/material';
import {  MatDialog } from '@angular/material';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {
  forgot: FormGroup;
  email = new FormControl();
  env: any = environment;
  constructor(
    private router: Router,
    // private authService: AuthControllerService,
    private form: FormBuilder,
    public dialog: MatDialog,
    // private _snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.forgot = this.form.group({
      email: new FormControl(),
    });
  }

  onSubmit() {
    this.dialog.closeAll();
  }
  onCancel() {
    this.dialog.closeAll();
    this.router.navigate(["/login"]);
  }
}
