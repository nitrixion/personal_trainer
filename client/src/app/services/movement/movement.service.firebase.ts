import { Injectable } from '@angular/core';
import { AngularFireObject, AngularFireDatabase } from 'angularfire2/database';
import { MovementService } from './movement.service';
import { Movement } from '../../model';

@Injectable()
export class MovementServiceFirebase extends MovementService {

    constructor(private db: AngularFireDatabase) { super(); }

    public getById(id) {
        return this.db.object(`movements/${id}`).valueChanges();
    }

    public getAll() {
        return this.db.list(`movements`).valueChanges();
    }

    save(item: Movement): Promise<string> {
        throw new Error("Method not implemented.");
    }
    update(item: Movement): Promise<string> {
        throw new Error("Method not implemented.");
    }

    //TODO: search movements by name

}