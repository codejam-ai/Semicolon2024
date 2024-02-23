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

@Component({
  selector: 'app-create-thread',
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatButtonModule, CommonModule,MatDialogTitle, MatDialogContent,MatDialogModule],
  templateUrl: './create-thread.component.html',
  styleUrl: './create-thread.component.scss'
})
export class CreateThreadComponent {
  
  // constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  categories: any = ['Payroll', 'HR', 'Company Policies', 'Fun Activity', 'Work Life Balance',
    'Suggestion', 'Learning', 'Aspiration'];

}
