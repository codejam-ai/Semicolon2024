import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url: string = 'http://localhost:8088/connecto/employee/';

  constructor(private http: HttpClient) { }

  loginUserDetails(userDetails: any): Observable<any> {
    let loginUrl = this.url + 'login';
    return this.http.post(loginUrl, userDetails);
  }

  signupUserDetails(userDetails: any): Observable<any> {
    let signupUrl = this.url + 'signup';
    return this.http.post(signupUrl, userDetails);
  }
}