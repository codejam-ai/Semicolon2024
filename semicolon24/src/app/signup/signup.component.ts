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
import { Router } from '@angular/router';

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

  constructor(private formBuilder: FormBuilder, private apiService: ApiService,
    private router: Router) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      employeeID: ['', Validators.required],
      employeeName: ['', Validators.required],
      location: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
      confirmPassword: ['', Validators.required]
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
        console.log("{}", data);
        this.router.navigateByUrl('');
      }
    });
  }

  onReset(): void {
    this.submitted = false;
    this.signupForm.reset();
  }

}
