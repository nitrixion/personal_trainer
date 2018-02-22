import { Injectable } from '@angular/core';
import { User, Role } from '../../model';
import { UserService } from './user.service';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserServiceMock extends UserService {
    currentUser: User;
    constructor() {
        super();
        this.currentUser = new User();
        this.currentUser.id = "";
        this.currentUser.username = "";
        this.currentUser.role = Role.trainer;
        this.currentUser.userIds = ["id1", "id2"];

    }

    login(username: string, password: string): Promise<User> {
        return new Promise<User>((resolve,reject) => {
            resolve(this.currentUser);
        });
    }
    logout() {
        // no op
    }
    me(): Promise<User> {
        return new Promise<User>((resolve,reject) => {
            resolve(this.currentUser);
        });
    }
    getClients(): Promise<User[]> {
        return new Promise<User[]>((resolve,reject) => {
            resolve([this.currentUser]);
        });
    }
    getUserById(id: any): Observable<{}> {
        return of(this.currentUser);
    }
    getUserByRole(role: Role): Observable<{}[]> {
        this.currentUser.role = role;
        return of([this.currentUser]);
    }
    assignUser(clientUser: any) {
        // no op
    }
}