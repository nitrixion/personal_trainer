import { Injectable } from '@angular/core';
import { User, Role } from '../../model';

@Injectable()
export class UserResource {
    private users: User[]; 

    constructor() { 
        this.populateUsers();
    }

    private populateUsers() {
        this.users = [];
        var user = new User();
        user.id = this.generateId();
        user.username = "trainer";
        user.role = Role.trainer;
        this.users.push(user);

        user = new User();
        user.id = this.generateId();
        user.username = "trainee";
        user.role = Role.trainee;
        this.users.push(user);
    }

    private generateId() {
        //http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript
        return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    }

    public getUsers() {
        return this.users;
    }
}