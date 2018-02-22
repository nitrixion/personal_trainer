import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { ExerciseService } from "./exercise.service";


@Injectable()
export class ExerciseServiceFirebase extends ExerciseService {

    constructor(private db: AngularFireDatabase) {
        super();
    }

    public getById(id) {
        return this.db.object(`exercises/${id}`).valueChanges();
    }

    public getAll() {
        return this.db.list(`exercises`).valueChanges();
    }

    save(item: any): Promise<string> {
        throw new Error("Method not implemented.");
    }
    update(item: any): Promise<string> {
        throw new Error("Method not implemented.");
    }
}