import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';
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
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import {MatChipsModule} from '@angular/material/chips';

@Component({
  selector: 'app-thread',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatFormFieldModule, MatButtonModule,
    MatExpansionModule, CreateThreadComponent, HttpClientModule, CommentExistingThreadComponent,
    MatToolbarModule,MatSidenavModule,MatListModule,MatDividerModule,MatChipsModule],
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
  opened: boolean=true;

  constructor(
    private http: HttpClient, 
    private authService: AuthenticationService, 
    private router: Router,
    public dialog: MatDialog) { }

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
    this.dialog.open(CreateThreadComponent);
    // this.dialog.open(CreateThreadComponent, {
    //   data: {
    //     animal: 'panda',
    //   },
    // });
  }

  addComment() {      
    this.dialog.open(CommentExistingThreadComponent);
    
  }

  logout() {
    this.authService.logoutUser();
    this.router.navigateByUrl('');
  }
}
