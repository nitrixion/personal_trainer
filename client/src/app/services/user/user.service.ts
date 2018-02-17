import { Injectable } from '@angular/core';
import { User, Role } from '../../model';
import { Observable } from 'rxjs';
import { UserResource } from './user.resource'

@Injectable()
export class UserService {

  private currentUser: User;

  constructor(private mock: UserResource) { 
    this.currentUser = this.mock.getUsers()[0];
  }

  public login(username:string, password:string) {
    this.currentUser = null;
    let user = this.mock.getUsers().filter((user) => { 
      return user.username === username;
    });
    if(user.length > 0){ 
      this.currentUser = user[0];
    }
    return Observable.of(this.currentUser);
  }

  public me() {
    return Observable.of(this.currentUser);
  }

}
