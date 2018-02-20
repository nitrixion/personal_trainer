import { Injectable } from '@angular/core';
import { AngularFireObject, AngularFireDatabase } from 'angularfire2/database';
import { UserService } from '../user/user.service'
import { Program } from '../../model';

@Injectable()
export class ProgramService {
  itemRef: AngularFireObject<any>;
  //user: any;
  //item: FirebaseObjectObservable<any>;
  constructor(private db: AngularFireDatabase) { }

  public getProgramById(id) {
    return this.db.object(`programs/${id}`).valueChanges();
  }

  public getAllPrograms() {
    return this.db.object(`programs`).valueChanges();
  }

  public save(program) {
    program.id = this.db.createPushId();
    return this.update(program);
  }

  public update(program) {
    this.itemRef = this.db.object(`programs/${program.id}`);
    program.startString = program.start.toDateString();
    program.endString = program.end.toDateString();
    let promise = new Promise<string>((resolve,reject) => {
      this.itemRef.set(program).then(() => {
        resolve(program.id);
      });
    });
    return promise;
  }

}