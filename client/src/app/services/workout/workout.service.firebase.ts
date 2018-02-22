import { Injectable } from '@angular/core';
import { WorkoutLoader } from './workout.loader';
import { Observable } from 'rxjs';
import { Http } from '@angular/http';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { Workout, User, Role } from '../../model';
import { UserService } from '../user';
import { WorkoutService } from './workout.service';

@Injectable()
export class WorkoutServiceFirebase extends WorkoutService {
  itemRef: AngularFireObject<any>;
  user: any;

  constructor(private userService: UserService,
              private db: AngularFireDatabase) {
                  super();
            }

  public getAll() {
    return this.db.list('workouts').valueChanges();
  }

  public getById(id) {
    return this.db.object(`workouts/${id}`).valueChanges();
  }

  public save(workout: Workout) {
    workout.id = this.db.createPushId();
    if(this.userService.currentUser) {
        workout.ownerId = this.userService.currentUser.id;
        return this.update(workout);
    }
    else{
        let promise = new Promise<string>((resolve,reject) => {
            this.userService.me().then((user) => {
                this.itemRef.set(workout).then(() => {
                    resolve(workout.id);
                }).catch(() => reject());
            }).catch(() => reject());
        });
    }
  }

  public update(workout: Workout) {
    this.itemRef = this.db.object(`workouts/${workout.id}`);
    let promise = new Promise<string>((resolve,reject) => {
      this.itemRef.set(workout).then(() => {
        resolve(workout.id);
      });
    });
    return promise;
  }

}
