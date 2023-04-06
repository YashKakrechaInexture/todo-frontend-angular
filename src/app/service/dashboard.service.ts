import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TodoSummary } from '../model/todo-summary.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private hostname = environment.baseUrl + "/todo";

  constructor(
    private httpClient:HttpClient
  ) { 
  }

  getSummary(){
    return this.httpClient.get<TodoSummary>(this.hostname+"/summary");
  }
}
