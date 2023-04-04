import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';
import { LoginDto } from '../model/login-dto.model';
import { LoginResponse } from '../model/login-response.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private hostname = environment.baseUrl + "/authenticate";

  constructor(
    private httpClient : HttpClient,
    private cookieService : CookieService
  ) {
  }

  public authenticate(loginDto : LoginDto){
    return this.httpClient.post<LoginResponse>(this.hostname,loginDto);
  }

  public setToken(token: string) {
    // sessionStorage.setItem('token', token);
    this.cookieService.set('token', token, undefined, '/', undefined, true, 'Strict');
  }

  public getToken() {
    // return sessionStorage.getItem('token');
    return this.cookieService.get('token');
  }

  public isLoggedIn() {
    // return sessionStorage.getItem('token')!==null;
    return this.cookieService.get('token')!=="";
  }

  public logout(){
    // sessionStorage.removeItem('token');
    this.cookieService.delete('token');
  }
}
