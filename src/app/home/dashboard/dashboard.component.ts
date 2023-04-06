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

  constructor (
    private dashboardService : DashboardService
  ){}

  filterIcons: FilterIcon[] = [
    {
      title: "To Do",
      value: 0,
      css: "btn-info",
      status: "TODO"
    },
    {
      title: "In Progress",
      value: 0,
      css: "btn-primary",
      status: "IN_PROGRESS"
    },
    {
      title: "Completed",
      value: 0,
      css: "btn-success",
      status: "COMPLETED"
    },
    {
      title: "On Hold",
      value: 0,
      css: "btn-warning",
      status: "ON_HOLD"
    },
    {
      title: "Cancelled",
      value: 0,
      css: "btn-secondary",
      status: "CANCELLED"
    },
    {
      title: "Over Due",
      value: 0,
      css: "btn-danger",
      status: "OVERDUE"
    }
  ];
  ngOnInit(): void {
    this.dashboardService.getSummary().subscribe(
      (response : TodoSummary)=>{
        this.filterIcons[0].value = response.TODO;
        this.filterIcons[1].value = response.IN_PROGRESS;
        this.filterIcons[2].value = response.COMPLETED;
        this.filterIcons[3].value = response.ON_HOLD;
        this.filterIcons[4].value = response.CANCELLED;
        this.filterIcons[5].value = response.OVERDUE;
      }
    );
  }
}
