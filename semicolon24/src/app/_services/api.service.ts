import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  loginUserDetails(userDetails: any): Observable<any> {
    let url: string = '/assets/json/login.json';
    return this.http.get(url, userDetails);
  }
}