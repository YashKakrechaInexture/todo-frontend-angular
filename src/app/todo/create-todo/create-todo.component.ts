import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Todo } from 'src/app/model/todo.model';
import { TodoService } from 'src/app/service/todo.service';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css']
})
export class CreateTodoComponent implements OnInit, OnDestroy {
  title: String;
  description: String;

  constructor(
    private todoService : TodoService, 
    private router : Router,
    private toast : NgToastService
  ) { 
    this.title = "";
    this.description = "";
  }

  ngOnInit(): void {
    
  }

  ngOnDestroy(): void {
    
  }

  public onSubmit() {
    if(this.title==="" || this.description===""){
      this.toast.error({detail:"ERROR", summary:'Please Fill Form!', duration:5000});
      return;
    }
    const todo : Todo = {
      title: this.title,
      description: this.description
    }
    this.saveTodo(todo);
  }

  private saveTodo(todo: Todo){
    this.todoService.createTodo(todo).subscribe(
      (response)=>{
        this.toast.success({detail:"SUCCESS", summary:'Todo Added!', duration:5000});
        this.router.navigateByUrl('todos');
      },
      (error)=>{
        let errorMsg = error?.error?.error!=null?error.error.error:"Something Went Wrong!";
        this.toast.error({detail:"ERROR", summary:errorMsg, duration:5000});
      }
    );
  }
}
