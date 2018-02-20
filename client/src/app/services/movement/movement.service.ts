import { Injectable } from '@angular/core';
import { AngularFireObject, AngularFireDatabase } from 'angularfire2/database';
import { UserService } from '../user/user.service'

@Injectable()
export class MovementService {
  itemRef: AngularFireObject<any>;
  //user: any;
  //item: FirebaseObjectObservable<any>;
  constructor(private db: AngularFireDatabase) { }

  public getMovementById(id) {
    return this.db.object(`movements/${id}`).valueChanges();
  }

  public getAllMovements() {
    return this.db.object(`movements`).valueChanges();
  }

  // search movements by name

}
