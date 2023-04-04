import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { Subject } from 'rxjs';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, OnDestroy {
  users: User[];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  isLoading: boolean;

  constructor(
    private userService : UserService,
    private toast : NgToastService
  ){
    this.users = [];
    this.isLoading = true;
  }

  ngOnInit(): void {
    this.getUsers();
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  private getUsers(){
    this.userService.getUsers().subscribe(
      (response: User[])=>{
        this.users = response;
        this.dtOptions.data = this.users;
        this.dtTrigger.next(this.users);
        this.isLoading = false;
      },error=>{
        this.isLoading = false;
        this.toast.error({detail:"ERROR", summary:'Something Went Wrong!', duration:5000});
      }
    );
  }

}
