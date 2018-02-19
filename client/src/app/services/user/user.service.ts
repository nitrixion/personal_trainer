import { Injectable } from '@angular/core';
import { User, Role } from '../../model';
import { Observable } from 'rxjs';
import { UserResource } from './user.resource'
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class UserService {

  public currentUser: User = new User();

  constructor(public auth: AngularFireAuth) { 
  }

  public login(username:string, password:string) {
    this.auth.auth.signInWithEmailAndPassword(username,password).then(() => {
      //get profile
    }
  );
  //   let user = this.mock.getUsers().filter((user) => { 
  //     return user.username === username;
  //   });
  //   if(user.length > 0){ 
  //     this.currentUser = user[0];
  //   }
     return this.auth.authState;
   }

   public me() {
    return this.auth.authState;
   }
}
