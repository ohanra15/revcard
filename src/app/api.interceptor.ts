import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { map, catchError } from "rxjs/operators";
//   import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  constructor(private router: Router) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Apply the headers
    req = req.clone({
      setHeaders: {
        "Authorization": localStorage.getItem("token") || ""
      }
    });
    return next.handle(req).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          console.log("event--->>>", event);
        }
        return event;
      }),
      catchError((res: any) => {
        switch (res.status) {
          case 0:
            // no Internet
            break;
          case 400:
          case 401:
          case 403:
          case 500:
            //   this._snackBar.open("Failure", "ok", {
            //     duration: 5000,
            //   });
            break;
        }
        return throwError(res);
      })
    );
  }
}