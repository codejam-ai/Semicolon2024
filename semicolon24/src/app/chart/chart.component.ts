
import { CUSTOM_ELEMENTS_SCHEMA, Component , OnInit} from '@angular/core';
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { ApiService } from '../_services/api.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AuthenticationService } from '../_services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [NgxChartsModule,],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ChartComponent  {
  leadData = [
    { name: "Mobiles", value: 105000 },
    { name: "Laptop", value: 55000 },
    { name: "AC", value: 15000 },
    { name: "Headset", value: 150000 },
    { name: "Fridge", value: 20000 }
  ];

  /*
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
  }*/

  votingData =[
    {
      name: "Thread1",
      series: [
        {
          name: "Agreed",
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
          name: "Agreed",
          value: 600
        },
        {
          name: "Disagreed",
          value: 300
        }
      ]
    }
  ];

  onSelect(event:any) {
    console.log(event);
  }
}
