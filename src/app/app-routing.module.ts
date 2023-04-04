import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { HomepageComponent } from './home/homepage/homepage.component';
import { LoginFormComponent } from './Login/login-form/login-form.component';
import { CreateTodoComponent } from './todo/create-todo/create-todo.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { CreateUserComponent } from './user/create-user/create-user.component';
import { UserListComponent } from './user/user-list/user-list.component';

const routes: Routes = [
  { path: '', component: LoginFormComponent, pathMatch:'full' },
  { path: 'home', component: HomepageComponent, canActivate: [AuthGuard] },
  { path: 'todos', component: TodoListComponent, canActivate: [AuthGuard] },
  { path: 'create-todo', component: CreateTodoComponent, canActivate: [AuthGuard] },
  { path: 'users', component: UserListComponent, canActivate: [AuthGuard] },
  { path: 'create-user', component: CreateUserComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
