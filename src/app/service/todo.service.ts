import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../model/todo.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private hostname = environment.baseUrl + "/todo";

  constructor(
    private httpClient:HttpClient
  ) { 
  }

  getTodos(){
    return this.httpClient.get<Todo[]>(this.hostname);
  }

  getTodoById(id: number){
    return this.httpClient.get<Todo>(this.hostname+"/"+id);
  }

  createTodo(todo: Todo){
    return this.httpClient.post<Todo>(this.hostname,todo);
  }

  completeTodo(id: number){
    return this.httpClient.patch<Todo>(this.hostname+"/complete/"+id, null);
  }
}
