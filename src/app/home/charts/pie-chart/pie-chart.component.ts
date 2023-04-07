import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit, OnChanges {
  public chart: any;
  @Input() labels: String[] = [];
  @Input() dataValues: number[] = [];
  
  ngOnInit(): void {
    this.createChart();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("inside changes");
    if (changes['dataValues'] && this.chart) {
      this.chart.data.datasets[0].data = this.dataValues;
      this.chart.update(); // Update the chart
    }
  }

  createChart() {
    console.log(this.dataValues);
    const data = {
      labels: this.labels,
      datasets: [{
        label: 'My First Dataset',
        data: this.dataValues,
        // [1,2,3,4,5,6],
        // backgroundColor: [
        //   'rgb(255, 99, 132)',
        //   'rgb(54, 162, 235)',
        //   'rgb(255, 205, 86)'
        // ],
        hoverOffset: 4
      }]
    };
    this.chart = new Chart("pieChart", {
      type: 'pie',
      data: data
    });
  }
}
