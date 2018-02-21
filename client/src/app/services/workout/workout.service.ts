import { Injectable } from '@angular/core';
import { WorkoutLoader } from './workout.loader';
import { Observable } from 'rxjs';
import { Http } from '@angular/http';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { Workout, User, Role } from '../../model';
import { UserService } from '../user';

@Injectable()
export class WorkoutService {
  itemRef: AngularFireObject<any>;
  user: any;

  constructor(private userService: UserService,
              //private mock: WorkoutLoader,
              private db: AngularFireDatabase
            ) {
                //this.mock.load();
               }

  private populate() {
    // let workouts = this.mock.getWorkouts();
    
    // workouts.forEach((wo) => {
    //   this.itemRef = this.db.object(`workouts/${wo.id}`);
    //   this.itemRef.set(wo);
    // });

    // let exercises = this.mock.getExercises();
    // exercises.forEach((exe) => {
    //   this.itemRef = this.db.object(`exercises/${exe.id}`);
    //   this.itemRef.set(exe);
    // });

    // let movements = this.mock.getMovements();
    // movements.forEach((move) => {
    //   this.itemRef = this.db.object(`movements/${move.id}`);
    //   this.itemRef.set(move);
    // });
    

    // return Observable.of(workouts); 
  }

  public init() {
    this.userService.me().then((user) => {
      this.populate();
    });
  }

  public getAllWorkouts() {
    return this.db.list('workouts').valueChanges();
  }

  public getWorkoutById(id) {
    return this.db.object(`workouts/${id}`).valueChanges();
  }

  public save(workout: Workout) {
    let promise = new Promise((resolve,reject) => {
      workout.id = this.db.createPushId();
      this.userService.me().then((user) => {
        workout.ownerId = user.id;
        this.itemRef = this.db.object(`workouts/${workout.id}`);
        this.itemRef.set(workout).then(() => {
          resolve(workout.id);
        })
        .catch(() => {
          reject();
        });
      }).catch(() => {
        reject();
      });
    });
    return promise;
  }

  public update(workout: Workout) {
    this.itemRef = this.db.object(`workouts/${workout.id}`);
    return this.itemRef.set(workout);
  }

}
