import { environment } from './../../../environments/environment.prod';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Router, NavigationEnd } from '@angular/router';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-app-nav',
  templateUrl: './app-nav.component.html',
  styleUrls: ['./app-nav.component.scss']
})
export class AppNavComponent implements OnInit {
  // faSquare = faRetweet;
  mobileQuery: MediaQueryList;
  mobileQueriesFunction: any;
  private _mobileQueryListener: () => void;
  loggedIn: boolean = false;
  env: any = environment;
  mobileQueries: MediaQueryList;
  isExpanded: boolean = true;

  constructor(media: MediaMatcher, changeDetectorRef: ChangeDetectorRef, private router: Router, public dialog: MatDialog) {
    this.mobileQuery = media.matchMedia("(max-width: 200px)");
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

    this.mobileQueries = media.matchMedia('(max-width: 800px)');
    this.mobileQueriesFunction = x => {
      this.isExpanded = x.matches ? false : true;
    };
    this.mobileQueries.addListener(this.mobileQueriesFunction);

    router.events.subscribe(val => {
      if (val instanceof NavigationEnd) {
        this.loggedIn = this.setLoggedIn();

        (!this.loggedIn && this.router.navigate(['/login']));
        
        // if(!this.loggedIn) {
        //    if(this.router.url !== '/login'){
        //     this.router.navigate(['/login-dasboard'])
        //    }
        // };
      }
    });
  }

  ngOnInit() { }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  toggleNav() {
    if (this.mobileQuery) {
      this.isExpanded = !this.isExpanded;
    }
  }


  onsign() {
    localStorage.removeItem('valid-user');
    this.router.navigate(['/login'])
  }

  public setLoggedIn() {
    let isLoggedIn: boolean = !!localStorage.getItem('valid-user');
    if (!isLoggedIn) {
      isLoggedIn = false;
    }
    return isLoggedIn;
  }
}
