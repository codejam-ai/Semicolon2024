import { Component, Inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import {
  MatDialogTitle,
  MatDialogContent,
  MatDialogModule,
} from '@angular/material/dialog';
import { ApiService } from '../_services/api.service';
import { AbstractControl, FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-create-thread',
  standalone: true,
  imports: [MatCardModule, MatIconModule, HttpClientModule, MatButtonModule, ReactiveFormsModule, CommonModule, MatDialogTitle, MatDialogContent, MatDialogModule],
  providers: [HttpClient, ApiService],
  templateUrl: './create-thread.component.html',
  styleUrl: './create-thread.component.scss'
})
export class CreateThreadComponent {

  constructor(private apiService: ApiService, private formBuilder: FormBuilder) { }
  addThreadForm: FormGroup;
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

    this.addThreadForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      category: [null, Validators.required]
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.addThreadForm.controls;
  }

  onSubmit() {
    if (this.addThreadForm.invalid) {
      return;
    }

    const catId = this.addThreadForm.get("category").value
    const categoryName= this.categories.find(x=>x.id==catId).category
    const payload = {
      "title": this.addThreadForm.get("title").value,
      "description": this.addThreadForm.get("description").value,
      "category": {
        "id": catId,
        "category": categoryName
      },
      "employeeId": sessionStorage.getItem("token")
    }
    this.apiService.addThread(payload).subscribe(data => {
      if (data) {
        this.message = "Thread Successfully Added"
        window.location.reload()
      } else {
        this.message = "Something went wrong. Thread could not be added"
      }
    });
  }



}
