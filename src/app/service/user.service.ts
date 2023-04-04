import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private hostname = environment.baseUrl + "/user"

  constructor(
    private httpClient:HttpClient
  ) {

  }

  getUsers(){
    return this.httpClient.get<User[]>(this.hostname);
  }

  getUserById(id: number){
    return this.httpClient.get<User>(this.hostname+"/"+id);
  }

  createUser(user: User){
    return this.httpClient.post<User>(this.hostname,user);
  }
}
