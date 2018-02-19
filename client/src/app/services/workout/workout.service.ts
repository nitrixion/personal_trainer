import { Injectable } from '@angular/core';
import { WorkoutResource } from './workout.resource';
import { Observable } from 'rxjs';
import { Http } from '@angular/http';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { UserService } from '../user/user.service';
import { Workout, User } from '../../model';

@Injectable()
export class WorkoutService {
  itemRef: AngularFireObject<any>;
  user: any;
  //item: FirebaseObjectObservable<any>;
  constructor(private mock: WorkoutResource,
              private userService: UserService,
              private db: AngularFireDatabase) { }

  private populate() {
    let workouts = this.mock.getWorkouts();
    
    workouts.forEach((wo) => {
      this.itemRef = this.db.object(`workouts/${wo.id}`);
      this.itemRef.set(wo);
    });

    let exercises = this.mock.getExercises();
    exercises.forEach((exe) => {
      this.itemRef = this.db.object(`exercises/${exe.id}`);
      this.itemRef.set(exe);
    });

    let movements = this.mock.getMovements();
    movements.forEach((move) => {
      this.itemRef = this.db.object(`movements/${move.id}`);
      this.itemRef.set(move);
    });
    

    return Observable.of(workouts); 
  }

  public init() {
    this.userService.me().subscribe((user) => {
      this.populate();
    });
  }

  public getAllWorkouts() {
    return this.db.list('workouts').valueChanges();
  }

  public getWorkoutById(id) {
    return this.db.object(`workouts/${id}`).valueChanges();
  }

  public addWorkout(workout: Workout) {
    workout.id = this.db.createPushId();
    this.userService.me().subscribe((user) => {
      workout.owner = user;
      this.itemRef = this.db.object(`workouts/${workout.id}`);
      this.itemRef.set(workout);
    })
  }

}
