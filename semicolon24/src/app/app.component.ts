import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { AuthenticationService } from './_services/authentication.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbarModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'semicolon24';

  loggedIn: boolean = false;

  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
    this.authService.isLoggedIn.subscribe((status) => {
      this.loggedIn = status;
    });
  }

  loginUser() {
    this.router.navigateByUrl('login');
  }

  signupUser() {
    this.router.navigateByUrl('signup');
  }
}
