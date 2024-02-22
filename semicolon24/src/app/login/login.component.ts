import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../_services/authentication.service';
import { AlertService } from '../_services/alert.service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { ApiService } from '../_services/api.service';
import { MatInputModule } from '@angular/material/input';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, MatCardModule, MatInputModule, HttpClientModule, MatIconModule,
    MatButtonModule],
  providers: [AlertService, HttpClient, ApiService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  isValidUser: boolean = false;
  invalidUserMsg: string = '';

  constructor(private router: Router, private formBuilder: FormBuilder, private authService: AuthenticationService,
    private apiService: ApiService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['test@test.com', Validators.required],
      name: ['Test User', Validators.required],
      password: ['test@1234', Validators.required]
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }

  onSubmit() {
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    this.apiService.loginUserDetails(this.loginForm.value).subscribe(data => {
      if (data) {
        let email = this.loginForm.value.email;
        this.authService.loginUser();
        this.router.navigateByUrl('thread');
        this.isValidUser = data;
        this.invalidUserMsg = "";
      } else {
        this.isValidUser = false;
        this.invalidUserMsg = "Email and Password is invalid";
      }
    });
  }

  logout() {
    this.router.navigateByUrl('/login');
  }

}
