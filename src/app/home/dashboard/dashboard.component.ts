import { Component } from '@angular/core';
import { FilterIcon } from 'src/app/model/filter-icon.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  filterIcons: FilterIcon[] = [
    {
      title: "To Do",
      value: 0,
      css: "btn-primary"
    },
    {
      title: "Completed",
      value: 1,
      css: "btn-success"
    },
    {
      title: "On Hold",
      value: 2,
      css: "btn-warning"
    },
    {
      title: "Cancelled",
      value: 3,
      css: "btn-danger"
    },
    {
      title: "Due Today",
      value: 4,
      css: "btn-info"
    },
    {
      title: "Completed Today",
      value: 5,
      css: "btn-secondary"
    }
  ];
}
