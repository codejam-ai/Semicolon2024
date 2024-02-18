import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-thread',
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatButtonModule, CommonModule],
  templateUrl: './create-thread.component.html',
  styleUrl: './create-thread.component.scss'
})
export class CreateThreadComponent {
  
  categories: any = ['Payroll', 'HR', 'Company Policies', 'Fun Activity', 'Work Life Balance',
    'Suggestion', 'Learning', 'Aspiration']

}
