import { Component, OnDestroy, OnInit } from '@angular/core';
import { Todo } from 'src/app/model/todo.model';
import { TodoService } from 'src/app/service/todo.service';
import { Subject } from 'rxjs';
import { error } from 'jquery';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit, OnDestroy {
  todos: Todo[];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  isLoading: boolean;

  constructor(
    private todoService : TodoService,
    private toast : NgToastService
  ){
    this.todos = [];
    this.isLoading = true;
    this.dtOptions.data = this.todos;
    this.dtTrigger.next(this.todos);
  }

  ngOnInit(): void {
    this.getTodos();
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  private getTodos(){
    this.isLoading = true;
    this.todoService.getTodos().subscribe(
      (response: Todo[])=>{
        this.todos = response;
        this.dtOptions.data = this.todos;
        this.dtTrigger.next(this.todos);
        this.isLoading = false;
      },error=>{
        this.isLoading = false;
        this.toast.error({detail:"ERROR", summary:'Something Went Wrong!', duration:5000});
      }
    );
  }

  public completeTodo(id: any){
    this.isLoading = true;
    this.todoService.completeTodo(id).subscribe(
      (response: Todo)=>{
        this.isLoading = false;
        this.toast.success({detail:"SUCCESS", summary:'Todo Completed!', duration:5000});
        $('#todo-table').DataTable().destroy();
        this.getTodos();
      },error=>{
        this.isLoading = false;
        this.toast.error({detail:"ERROR", summary:'Something Went Wrong!', duration:5000});
      }
    );
  }
}
