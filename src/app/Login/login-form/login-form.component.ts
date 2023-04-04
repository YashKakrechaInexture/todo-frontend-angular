import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { LoginDto } from 'src/app/model/login-dto.model';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit,OnDestroy {
  email: String;
  password: String;

  constructor (
    private authenticationService : AuthenticationService,
    private router : Router,
    private toast : NgToastService
  ) {
    this.email = "";
    this.password = "";
  }

  ngOnInit(): void {
    
  }

  ngOnDestroy(): void {
    
  }

  public onSubmit(){
    if(this.email===""){
      this.toast.error({detail:"ERROR", summary:'Please Enter Your Email!', duration:5000});
      return;
    }
    if(this.password===""){
      this.toast.error({detail:"ERROR", summary:'Please Enter Your Password!', duration:5000});
      return;
    }
    const loginDto: LoginDto = {
      email : this.email,
      password : this.password
    }
    this.authenticate(loginDto);
  }

  private authenticate(loginDto : LoginDto){
    this.authenticationService.authenticate(loginDto).subscribe(
      (response)=>{
        this.authenticationService.setToken(response.token.toString());
        this.router.navigateByUrl('home');
      },
      (error)=>{
        this.toast.error({detail:"ERROR", summary:error?.error?.error, duration:5000});
      }
    );
  }
}
