
import { CUSTOM_ELEMENTS_SCHEMA, Component , OnInit} from '@angular/core';
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { ApiService } from '../_services/api.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AuthenticationService } from '../_services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [NgxChartsModule,HttpClientModule],
  providers: [HttpClient, ApiService],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ChartComponent  implements OnInit{
  leadData :any[];
  /*leadData = [
    {
        value: 3,
        "name": "Payroll"
    },
    {
        value: 2,
        "name": "Training"
    },
    {
        value: 1,
        "name": "Insurance"
    }
];*/

  
  constructor(
    private http: HttpClient, 
    private authService: AuthenticationService, 
    private router: Router,
    private apiService:ApiService) { }

  ngOnInit(): void {
    
    // const url: string = '/assets/json/data.json';
    
    this.apiService.getCategoryWiseThreadCount().subscribe(data => {
      if (data) {
        this.leadData=data
        console.log(data);
      }else{
        //error handling
      }
    });
  }

  votingData =[
    {
      name: "Thread1",
      series: [
        {
          name: "agreed",
          value: 730
        },
        {
          name: "Disagreed",
          value: 200
        }
      ]
    },
 
    {
      name: "Thread2",
      series: [
        {
          name: "agreed",
          value: 600
        },
        {
          name: "Disagreed",
          value: 300
        }
      ]
    }
  ];
  /* 
  //api response data format
  let threads= [
      {
          threadId: 2,
          title: "health benefits",
          noOfVotes: 106,
          votes: {
              agreed: 80,
              notAgreed: 26
          }
      },
      {
          threadId: 1,
          title: "Health benefits thread",
          noOfVotes: 203,
          votes: {
              agreed: 91,
              notAgreed: 112
          }
      }
  ] ;*/

  /*leadsList:any[] = [];

  createVotingData(threads){   
    threads.forEach(thread =>  {   
      this.leadsList.push({
        name: thread.title,
        series:[ {name: "Agreed", value:thread.votes.agreed},
                  {name: "DisAgreed", value:thread.votes.notAgreed}]})
      });
  }*/

  onSelect(event:any) {
    console.log(event);
  }
}
