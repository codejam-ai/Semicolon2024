
import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { NgxChartsModule } from "@swimlane/ngx-charts";

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [NgxChartsModule,],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ChartComponent {
  saleData = [
    { name: "Mobiles", value: 105000 },
    { name: "Laptop", value: 55000 },
    { name: "AC", value: 15000 },
    { name: "Headset", value: 150000 },
    { name: "Fridge", value: 20000 }
  ];
}
