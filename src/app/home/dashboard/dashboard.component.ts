import { Component, OnInit } from '@angular/core';
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
        this.values.push(1);
        this.filterIcons[0].value = response.TODO;
        this.filterIcons[1].value = response.IN_PROGRESS;
        this.filterIcons[2].value = response.COMPLETED;
        this.filterIcons[3].value = response.ON_HOLD;
        this.filterIcons[4].value = response.CANCELLED;
        this.filterIcons[5].value = response.OVERDUE;
        console.log(this.values);
      }
    );
  }
}
