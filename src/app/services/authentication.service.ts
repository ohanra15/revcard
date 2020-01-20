import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private http: HttpClient) {}

  authLogin(loginData) {
    return true;
    //  return this.http.get("/api/data");
  }

  getColors() {
    return true;
    // return this.http.get("https://example.com/api/users");
  }
}
