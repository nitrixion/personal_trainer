import { Injectable } from '@angular/core';
import { User, Role } from '../../model';
import { Observable, Subject } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { of } from 'rxjs/observable/of';

@Injectable()
export abstract class UserService {
    
    abstract currentUser: User;
    
    abstract login(username:string, password:string) : Promise<User>;

    abstract logout();

    abstract me() : Promise<User>;

    abstract getClients() : Promise<User[]>;

    abstract getUserById(id) : Observable<{}>;

    abstract getUserByRole(role: Role) : Observable<{}[]>;

    abstract assignUser(clientUser);
}


