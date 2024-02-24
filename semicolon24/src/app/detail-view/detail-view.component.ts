import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ApiService } from '../_services/api.service';

import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-detail-view',
  standalone: true,
  imports: [CommonModule,MatDividerModule],
  templateUrl: './detail-view.component.html',
  styleUrl: './detail-view.component.scss'
})
export class DetailViewComponent {
  @Input() threadId:any

  comments:any[]

  constructor(private apiService:ApiService){}

ngOnInit(){
  this.showComments()
}

showComments(){
  this.apiService.getComments(this.threadId).subscribe(data => {
    if (data) {
      this.comments=data
    }else{
//error handling
    }
  });
}

likeDislike(commentid:number,val:any){
  
const payload =
  {
    "commentId": commentid,
    "threadId": this.threadId,
    "employeeId": sessionStorage.getItem("token"),
    "like": val
}
// this.apiService.likeDislike(payload).subscribe(data => {
//   if (data) {
//     // this.showComments()
//   } 
// });

}


}
