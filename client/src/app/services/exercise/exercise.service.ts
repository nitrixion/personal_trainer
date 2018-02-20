import { Injectable } from '@angular/core';
import { AngularFireObject, AngularFireDatabase } from 'angularfire2/database';
import { UserService } from '../user/user.service'

@Injectable()
export class ExerciseService {
  itemRef: AngularFireObject<any>;
  //user: any;
  //item: FirebaseObjectObservable<any>;
  constructor(private db: AngularFireDatabase) { }

  public getExerciseById(id) {
    return this.db.object(`exercises/${id}`).valueChanges();
  }

  public getAllExercises() {
    return this.db.object(`exercises`).valueChanges();
  }

}
