import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../_services/api.service';
import Validation from '../_utils/validation';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, MatInputModule, ReactiveFormsModule, MatCardModule, MatButtonModule, HttpClientModule,
    MatIconModule],
  providers: [HttpClient, ApiService],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private apiService: ApiService) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      firstName: ['test', Validators.required],
      userName: ['test123', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]],
      email: ['test@123', [Validators.required, Validators.email]],
      password: ['123456', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
      confirmPassword: ['123456', Validators.required]
    },
      {
        validators: [Validation.match('password', 'confirmPassword')]
      }
    );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.signupForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.signupForm.invalid) {
      return;
    }

    this.apiService.signupUserDetails(this.signupForm.value).subscribe(data => {
      if (data) {
        console.log("{}", data)
      }
    });
    console.log(JSON.stringify(this.signupForm.value, null, 2));
  }

  onReset(): void {
    this.submitted = false;
    this.signupForm.reset();
  }

}
