import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticationService } from './service/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authenticationService : AuthenticationService,
    private router : Router
  ){
  }

  canActivate(): boolean {
    if(!this.authenticationService.isLoggedIn()){
      this.router.navigateByUrl('');
      return false;
    }
    return true;
  }
  
}
