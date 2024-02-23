import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { CreateThreadComponent } from '../create-thread/create-thread.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommentExistingThreadComponent } from '../comment-existing-thread/comment-existing-thread.component';
import { AuthenticationService } from '../_services/authentication.service';
import { Router } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-thread',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatFormFieldModule, MatButtonModule,
    MatExpansionModule, CreateThreadComponent, HttpClientModule, CommentExistingThreadComponent,
    MatToolbarModule],
  templateUrl: './thread.component.html',
  styleUrl: './thread.component.scss'
})
export class ThreadComponent implements OnInit {

  loggedInUserName = '';
  openThreadCount: number = 0;
  commentCount: number = 0;
  isNewThreadClicked: boolean = false;
  existingThread: boolean = false;
  comments: Array<any> = [];

  constructor(private http: HttpClient, private authService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
    // const url: string = '/assets/json/data.json';
    // this.http.get(url).subscribe((res: any) => {
    //   if (res) {
    //     this.existingThread = true;
    //     this.loggedInUserName = res.firstName + " " + res.lastName;
    //     this.comments = res.comments;
    //     this.commentCount = res.comments.length;
    //   }
    // });
  }

  openNewThread() {
    this.openThreadCount++;
    this.isNewThreadClicked = true;
  }

  logout() {
    this.authService.logoutUser();
    this.router.navigateByUrl('');
  }
}
