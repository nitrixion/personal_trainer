import { Injectable } from '@angular/core';
import { AngularFireObject, AngularFireDatabase } from 'angularfire2/database';
import { Program } from '../../model';
import { ProgramService } from './program.service';

@Injectable()
export class ProgramServiceFirebase extends ProgramService {
  itemRef: AngularFireObject<any>;
  //user: any;
  //item: FirebaseObjectObservable<any>;
  constructor(private db: AngularFireDatabase) { super(); }

  public getById(id) {
    return this.db.object(`programs/${id}`).valueChanges();
  }

  public getAll() {
    return this.db.list(`programs`).valueChanges();
  }

  public save(program) {
    program.id = this.db.createPushId();
    return this.update(program);
  }

  public update(program) {
    this.itemRef = this.db.object(`programs/${program.id}`);
    program.startString = program.start.toDateString();
    program.endString = program.end.toDateString();
    // add owner id
    let promise = new Promise<string>((resolve,reject) => {
      this.itemRef.set(program).then(() => {
        resolve(program.id);
      });
    });
    return promise;
  }

}