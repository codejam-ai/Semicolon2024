import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { CreateThreadComponent } from '../create-thread/create-thread.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-thread',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatFormFieldModule, MatButtonModule,
    MatExpansionModule, CreateThreadComponent, HttpClientModule],
  templateUrl: './thread.component.html',
  styleUrl: './thread.component.scss'
})
export class ThreadComponent implements OnInit {

  loggedInUserName = 'Jon Deo';
  openThreadCount: number = 0;
  commentCount: number = 5;
  isNewThreadClicked: boolean = false;
  userInfo: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const url: string = '/assets/json/data.json';
    this.http.get(url).subscribe((res) => {
      this.userInfo = res;
      this.loggedInUserName = this.userInfo.firstName + ' ' + this.userInfo.lastName;
    });
  }

  openNewThread() {
    this.openThreadCount++;
    this.isNewThreadClicked = true;
  }
}
