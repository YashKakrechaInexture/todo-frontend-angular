import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { FilterIcon } from 'src/app/model/filter-icon.model';
import { TodoSummary } from 'src/app/model/todo-summary.model';
import { DashboardService } from 'src/app/service/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private size: number = 6;

  titles: String[] = [
    "To Do",
    "In Progress",
    "Completed",
    "On Hold",
    "Cancelled",
    "Over Due"
  ];

  private status: String[] = [
    "TODO",
    "IN_PROGRESS",
    "COMPLETED",
    "ON_HOLD",
    "CANCELLED",
    "OVERDUE"
  ];

  private buttonColors: String[] = [
    "btn-info",
    "btn-primary",
    "btn-success",
    "btn-warning",
    "btn-secondary",
    "btn-danger"
  ];

  values: number[] = [];

  filterIcons: FilterIcon[] = [];

  public pieChart: any;
  public barChart: any;

  constructor(
    private dashboardService: DashboardService
  ) {
    for (let i = 0; i < this.size; i++) {
      this.filterIcons.push({
        title: this.titles[i],
        value: 0,
        css: this.buttonColors[i],
        status: this.status[i]
      });
    }
  }

  ngOnInit(): void {
    this.dashboardService.getSummary().subscribe(
      (response: TodoSummary) => {
        this.values.push(response.TODO)
        this.values.push(response.IN_PROGRESS);
        this.values.push(response.COMPLETED);
        this.values.push(response.ON_HOLD);
        this.values.push(response.CANCELLED);
        this.values.push(response.OVERDUE);

        this.filterIcons[0].value = response.TODO;
        this.filterIcons[1].value = response.IN_PROGRESS;
        this.filterIcons[2].value = response.COMPLETED;
        this.filterIcons[3].value = response.ON_HOLD;
        this.filterIcons[4].value = response.CANCELLED;
        this.filterIcons[5].value = response.OVERDUE;

        this.createPieChart();
        this.createBarChart();
      }
    );
  }


  createPieChart() {
    // console.log("create chart");
    // console.log(this.dataValues);
    const data = {
      labels: this.titles,
      datasets: [{
        label: 'Pie Chart Todos',
        data: this.values,
        // [1,2,3,4,5,6],
        // backgroundColor: [
        //   'rgb(255, 99, 132)',
        //   'rgb(54, 162, 235)',
        //   'rgb(255, 205, 86)'
        // ],
        hoverOffset: 4
      }]
    };
    this.pieChart = new Chart("pieChart", {
      type: 'pie',
      data: data
    });
  }

  createBarChart() {
    const data = {
      labels: this.titles,
      datasets: [{
        label: 'Bar Chart Todos',
        data: this.values,
        backgroundColor: [
          'rgba(54, 162, 235, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 205, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)'
        ],
        hoverOffset: 4
      }]
    };
    this.barChart = new Chart("barChart", {
      type: 'bar',
      data: data
    });
  }

}
