import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-detail-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detail-view.component.html',
  styleUrl: './detail-view.component.scss'
})
export class DetailViewComponent {

  category: string = 'HR';
  commentBoxClicked: boolean = false;

  openCommentBox() {
    this.commentBoxClicked = true;
  }

}
