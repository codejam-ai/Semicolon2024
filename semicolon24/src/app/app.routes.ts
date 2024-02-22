import { Routes } from '@angular/router';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { ThreadComponent } from './thread/thread.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginSignupComponent },
    { path: 'thread', component: ThreadComponent }
];
