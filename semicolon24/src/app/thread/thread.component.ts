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
import { DetailViewComponent } from '../detail-view/detail-view.component';
import { ApiService } from '../_services/api.service';

@Component({
  selector: 'app-thread',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatFormFieldModule, MatButtonModule,
    MatExpansionModule, CreateThreadComponent, HttpClientModule, CommentExistingThreadComponent,
    MatToolbarModule,MatSidenavModule,MatListModule,MatDividerModule,MatChipsModule,DetailViewComponent],
    providers: [HttpClient, ApiService],
    templateUrl: './thread.component.html',
  styleUrl: './thread.component.scss'
})
export class ThreadComponent implements OnInit {

  allMyThreads:any[]
 openThreads:any[]
  openThreadCount: number = 0;
  commentCount: number = 0;
  // isNewThreadClicked: boolean = false;
  existingThread: boolean = false;
  comments: Array<any> = [];
  opened: boolean=true;
  showMyThreads:boolean=true
  showOpenThreads:boolean=false
  showAnalytics:boolean=false
  name:any
  token:any
  role:any

  constructor(
    private http: HttpClient, 
    private authService: AuthenticationService, 
    private router: Router,
    public dialog: MatDialog,
    private apiService:ApiService) { }

  ngOnInit(): void {
    this.name=JSON.parse(sessionStorage.getItem("name"))
    this.token=JSON.parse(sessionStorage.getItem("token"))
    this.role=JSON.parse(sessionStorage.getItem("role"))
    // const url: string = '/assets/json/data.json';
    const params={
      empId:this.token,
      status:0,
      pagination_start:0,
      pagination_end:10
    }
    this.apiService.getMyThreads(params).subscribe(data => {
      if (data) {
        this.allMyThreads=data
      }else{
        //error handling
      }
    });
    this.apiService.getOpenThreadCount().subscribe(data => {
     this.openThreadCount=data
    });
  }

  openNewThread() {
    this.dialog.open(CreateThreadComponent);
  }

  addComment(threadId:any) {      
    this.dialog.open(CommentExistingThreadComponent,{
      data: {
        threadId: threadId,
      },
    });
    
  }

  toggleView(toggleVal:string){
  if(toggleVal==='showMyThreads'){
    this.showMyThreads=true
    this.showOpenThreads=false
    this.showAnalytics=false
  }else if(toggleVal==='showAnalytics'){
    this.showMyThreads=false
    this.showOpenThreads=false
    this.showAnalytics=true
  }  
  else{
  this.showAnalytics=false
      this.showMyThreads=false
      this.showOpenThreads=true
      this.displayOpenThreads()
    }
  }

  displayOpenThreads(){
    const params={
      status:2,
      pagination_start:0,
      pagination_end:10
    }
    this.apiService.getOpenThreads(params).subscribe(data => {
      if (data) {
        this.openThreads=data
      }else{
//error handling
      }
    });
  }
  

  logout() {
    this.authService.logoutUser();
    this.router.navigateByUrl('');
  }
}
