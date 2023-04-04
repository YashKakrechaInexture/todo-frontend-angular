import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { AuthenticationService } from '../service/authentication.service';
import { Router } from '@angular/router';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(
    private authenticationService : AuthenticationService,
    private router : Router
  ) {

  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(this.authenticationService.isLoggedIn()){
      request = request.clone({
        headers: request.headers.set('Authorization', `Bearer ${this.authenticationService.getToken()}`)
      });
    }else{
      this.router.navigateByUrl('');
    }
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          this.authenticationService.logout();
          this.router.navigateByUrl('');
        }
        return throwError(error);
      })
    );
  }
}
