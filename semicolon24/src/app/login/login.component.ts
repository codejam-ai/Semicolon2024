import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../_services/authentication.service';
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
  providers: [HttpClient, ApiService],
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
      email: ['', Validators.required],
      password: ['', Validators.required]
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
        this.authService.loginUser();
        this.router.navigateByUrl('thread');
        this.isValidUser = data;
        sessionStorage.setItem("name",JSON.stringify(data.name))
        sessionStorage.setItem("token",JSON.stringify(data.id))
        sessionStorage.setItem("role",JSON.stringify(data.role))
        this.invalidUserMsg = "";
      } else {
        this.isValidUser = false;
        this.invalidUserMsg = "Email and Password is invalid";
      }
    });
  }

  logout() {
    this.router.navigateByUrl('/login');
    sessionStorage.clear();
  }


}
