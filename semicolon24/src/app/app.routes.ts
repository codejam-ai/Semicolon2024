import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ThreadComponent } from './thread/thread.component';
import { SignupComponent } from './signup/signup.component';
import { ChartComponent } from './chart/chart.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'thread', component: ThreadComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'chart', component: ChartComponent}

];
