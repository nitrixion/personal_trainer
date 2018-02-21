import { Injectable } from '@angular/core';
import { User, Role } from '../../model';
import { Observable, Subject } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { UserService } from './user.service';

@Injectable()
export class UserServiceFirebase extends UserService{
  itemRef: AngularFireObject<any>;
  public currentUser: User;

  constructor(public auth: AngularFireAuth,
              private db: AngularFireDatabase) { 
    super();
  }

  // TEMP - Helper
  private createUser(authUser) {
    this.itemRef = this.db.object(`users/${authUser.uid}`);
    let user = new User(); 
    user.id = authUser.uid;
    user.username = authUser.email;
    user.role = authUser.email.indexOf("trainer") > -1 ? Role.trainer : Role.trainee;
    this.itemRef.set(user);
   }

  private getCurrentUser(uid) {
    let promise = new Promise<User>((resolve,reject) => {
      this.db.object(`users/${uid}`).valueChanges().subscribe((user: User) => {
        if(user && user.id){
          this.currentUser = user;
          resolve(this.currentUser);
        }
        else{
          reject("User not found");
        }
      });
    });
    return promise;
  }

  public login(username:string, password:string) {
    this.currentUser = undefined;
    let promise = new Promise<User>((resolve,reject) => {
      this.auth.auth.signInWithEmailAndPassword(username,password).then((authUser) => {
        console.log(authUser);
        resolve(this.getCurrentUser(authUser.uid));
      })
      .catch((error) => {
        reject(error);
      });
    });
    return promise;
  }

  public logout() {
    this.auth.auth.signOut().then(() => {
    this.currentUser = undefined;
    });
  }

  public me() {
    let promise = new Promise<User>((resolve,reject) => {
      if(this.currentUser) {
        resolve(this.currentUser);
      }
      else{
        this.auth.authState.subscribe((authUser) => {
          if(authUser && authUser.uid) {
            resolve(this.getCurrentUser(authUser.uid));
          }
          else{
            reject("User not found");
          }
        });
      }
    });
    return promise;
  }

  public getClients() {
    let promise = new Promise<User[]>((resolve,reject) => {
      this.me().then((user) => {
        let clients = [];
        if(user && user.userIds){
          for(let i = 0; i < user.userIds.length; i++) {
            this.getUserById(user.userIds[i]).subscribe((client) => {
              clients.push(Object.assign(new User(), client));
              // hacky...
              if(clients.length == user.userIds.length) {
                resolve(clients);
              }
            });
          }
          
        }
      })
      .catch(() => {
        reject(undefined);
      });
    });
    return promise;
  }

  public getUserById(id) {
    return this.db.object(`users/${id}`).valueChanges()
  }

  public getUserByRole(role: Role) {
    return this.db.list(`users`, ref => ref.orderByChild('role').equalTo(role)).valueChanges();
  }

  public assignUser(clientUser){
    this.me().then((user) => {
      // assign user to trainer
      this.itemRef = this.db.object(`users/${user.id}`);
      if(!user.userIds) user.userIds = [];
      user.userIds.push(clientUser.id);
      this.itemRef.update({userIds:user.userIds});
      // assign trainer to user
      this.itemRef = this.db.object(`users/${clientUser.id}`);
      this.itemRef.update({userIds:[user.id]});
    });
    
  }
}
