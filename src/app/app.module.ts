import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './Login/login-form/login-form.component';
import { LeftNavigationComponent } from './common/left-navigation/left-navigation.component';
import { HeaderComponent } from './common/header/header.component';
import { HomepageComponent } from './home/homepage/homepage.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { CreateTodoComponent } from './todo/create-todo/create-todo.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';
import { SpinnerComponent } from './common/spinner/spinner.component';
import { CreateUserComponent } from './user/create-user/create-user.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { FormsModule } from '@angular/forms';
import { NgToastModule } from 'ng-angular-popup';
import { TokenInterceptor } from './interceptor/token.interceptor';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    LeftNavigationComponent,
    HeaderComponent,
    HomepageComponent,
    TodoListComponent,
    CreateTodoComponent,
    SpinnerComponent,
    CreateUserComponent,
    UserListComponent,
    SidebarComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DataTablesModule,
    FormsModule,
    NgToastModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
