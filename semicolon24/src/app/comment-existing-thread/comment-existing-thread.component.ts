import { CommonModule } from '@angular/common';
import { Component, Inject, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import {
  MatDialogTitle,
  MatDialogContent,
  MatDialogModule,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../_services/api.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-comment-existing-thread',
  standalone: true,
  imports: [MatCardModule, MatIconModule, CommonModule, HttpClientModule, MatButtonModule, ReactiveFormsModule, MatDialogTitle, MatDialogContent, MatDialogModule],
  providers: [HttpClient, ApiService],
  templateUrl: './comment-existing-thread.component.html',
  styleUrl: './comment-existing-thread.component.scss'
})
export class CommentExistingThreadComponent {
  @Input('threadId') threadId: number;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private apiService: ApiService, private formBuilder: FormBuilder) { }
  addCommentForm: FormGroup;
  categories: any[]
  message: string = ""

  ngOnInit() {
    this.apiService.getCategories().subscribe(data => {
      if (data) {
        this.categories = data
      } else {
        //error handling
      }
    });

    this.addCommentForm = this.formBuilder.group({
      description: ['', Validators.required]
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.addCommentForm.controls;
  }

  onSubmit() {
    if (this.addCommentForm.invalid) {
      return;
    }

    const payload =
    {
      "comment": this.addCommentForm.get("description").value,
      "threadId": this.data.threadId,
      "employeeId": sessionStorage.getItem("token")
    }
    this.apiService.addComment(payload).subscribe(data => {
      if (data) {
        this.message = "Comment Successfully Added"
        window.location.reload()
      } else {
        this.message = "Something went wrong. Comment could not be added"
      }
    });
  }



}
