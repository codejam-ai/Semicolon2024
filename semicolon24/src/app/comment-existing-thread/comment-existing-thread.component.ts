import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-comment-existing-thread',
  standalone: true,
  imports: [MatCardModule, MatIconModule, CommonModule, MatButtonModule],
  templateUrl: './comment-existing-thread.component.html',
  styleUrl: './comment-existing-thread.component.scss'
})
export class CommentExistingThreadComponent {

  categories: any = ['Payroll', 'HR', 'Company Policies', 'Fun Activity', 'Work Life Balance',
    'Suggestion', 'Learning', 'Aspiration'];
}
