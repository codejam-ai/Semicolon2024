import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url: string = 'http://localhost:8088/connecto/employee/';
  threadUrl: string = 'http://localhost:8088/connecto/thread/';

  constructor(private http: HttpClient) { }

  loginUserDetails(userDetails: any): Observable<any> {
    let loginUrl = this.url + 'login';
    return this.http.post(loginUrl, userDetails);
  }

  signupUserDetails(userDetails: any): Observable<any> {
    let signupUrl = this.url + 'signup';
    return this.http.post(signupUrl, userDetails);
  }

  getMyThreads(params:any): Observable<any> {
    const queryParams=`${params.empId}/${params.status}/${params.pagination_start}/${params.pagination_end}`
    let threadUrl = this.threadUrl + 'get-threads-for-user/'+queryParams;
    return this.http.get(threadUrl);
  }

  getOpenThreads(params:any): Observable<any> {
    const queryParams=`${params.status}/${params.pagination_start}/${params.pagination_end}`
    let threadUrl = this.threadUrl + 'get-threads/'+queryParams;
    return this.http.get(threadUrl);
  }

  getCategories(): Observable<any> {
    let threadUrl = this.url + 'get-categories';
    return this.http.get(threadUrl);
  }
  getCategoryWiseThreadCount(): Observable<any> {
   // const queryParams=`${params.empId}/${params.status}/${params.pagination_start}/${params.pagination_end}`
    let threadUrl = this.url + 'get-thread-count-by-category';
    return this.http.get(threadUrl);
  }
}