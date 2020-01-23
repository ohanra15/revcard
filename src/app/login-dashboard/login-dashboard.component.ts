import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-dashboard',
  templateUrl: './login-dashboard.component.html',
  styleUrls: ['./login-dashboard.component.scss','./../navigation/app-nav/app-nav.component.scss']
})
export class LoginDashboardComponent implements OnInit {

  constructor(private router: Router,) { }

  ngOnInit() {
  }

  onsign() {
    this.router.navigate(['/login'])
  }
}
