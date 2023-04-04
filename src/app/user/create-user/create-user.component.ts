import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit, OnDestroy{
  email: String;
  password: String;

  constructor(
    private userService : UserService,
    private router : Router,
    private toast : NgToastService
  ){
    this.email = "";
    this.password = "";
  }

  ngOnInit(): void {
    
  }
  ngOnDestroy(): void {
    
  }

  public onSubmit() {
    if(this.email==="" || this.password===""){
      this.toast.error({detail:"ERROR", summary:'Please Fill Form!', duration:5000});
      return;
    }
    const user : User = {
      email: this.email,
      password: this.password
    }
    this.saveUser(user);
  }

  private saveUser(user: User){
    this.userService.createUser(user).subscribe(
      (response)=>{
        this.toast.success({detail:"SUCCESS", summary:'User Added!', duration:5000});
        this.router.navigateByUrl('users');
      },
      (error)=>{
        let errorMsg = error?.error?.error!=null?error.error.error:"Something Went Wrong!";
        this.toast.error({detail:"ERROR", summary:errorMsg, duration:5000});
      }
    );
  }
}
