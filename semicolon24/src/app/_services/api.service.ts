import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url: string = 'http://localhost:8088/connecto/employee/';
  threadUrl: string = 'http://localhost:8088/connecto/thread/';
  commentUrl: string = 'http://localhost:8088/connecto/comment/';

  constructor(private http: HttpClient) { }

  loginUserDetails(userDetails: any): Observable<any> {
    let loginUrl = this.url + 'login';
    return this.http.post(loginUrl, userDetails);
  }

  signupUserDetails(userDetails: any): Observable<any> {
    let signupUrl = this.url + 'signup';
    return this.http.post(signupUrl, userDetails);
  }

  getMyThreads(params: any): Observable<any> {
    const queryParams = `${params.empId}/${params.status}/${params.pagination_start}/${params.pagination_end}`
    let threadUrl = this.threadUrl + 'get-threads-for-user/' + queryParams;
    return this.http.get(threadUrl);
  }

  getOpenThreadCount(): Observable<any> {
    let threadUrl = this.threadUrl + 'get-open-thread-count' ;
    return this.http.get(threadUrl);
  }

  getOpenOrPendedThreads(params: any): Observable<any> {
    const queryParams = `${params.status}/${params.pagination_start}/${params.pagination_end}`
    let threadUrl = this.threadUrl + 'get-threads/' + queryParams;
    return this.http.get(threadUrl);
  }

  getCategories(): Observable<any> {
    let threadUrl = this.threadUrl + 'get-categories';
    return this.http.get(threadUrl);
  }

  addThread(threadData: any): Observable<any> {
    let url = this.threadUrl + 'add-thread';
    return this.http.post(url, threadData);
  }

  addComment(commentData: any): Observable<any> {    
    let url = this.commentUrl + 'add-comment';
    return this.http.post(url, commentData);
  }

  likeDislike(payload: any): Observable<any> {    
    let url = this.commentUrl + 'like-or-dislike-comment';
    return this.http.post(url, payload);
  }

  getComments(threadId: any): Observable<any> {    
    let url = this.commentUrl + 'get-comments/'+threadId;
    return this.http.get(url);
  }
  getCategoryWiseThreadCount(): Observable<any> {
   let threadUrl = this.threadUrl + 'get-thread-count-by-category';
    return this.http.get(threadUrl);
  }

  getVotesForThreads(): Observable<any> {
   let threadUrl = this.threadUrl + 'get-votes-for-threads';
     return this.http.get(threadUrl);
   }

}