import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { AdminService } from "./../../services/admin.service";



@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  public pressure_data = []
  public pressure_label = []



  public lineChartData: ChartDataSets[] = [
    { data: this.pressure_data, label: 'Blood Pressure' },
  ];
  public lineChartLabels: Label[] = this.pressure_label;
  public lineChartOptions: any= {
    responsive: true,
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];

 

  onLoad() {
    this.adminService.getBloodPressure().subscribe(
      data => {
        data.forEach(element => {
          this.pressure_data.push(element.pressure);
          this.pressure_label.push(element.patient_name.slice(0,5));
        });
      },
      error => {
        console.log(error);
        
      }
    );
  }




  constructor(
    private adminService: AdminService
  ) {}

  ngOnInit() {
    this.onLoad()
  }

}
