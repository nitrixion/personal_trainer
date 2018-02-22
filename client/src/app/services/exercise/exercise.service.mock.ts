import { Injectable } from "@angular/core";
import { ExerciseService } from "./exercise.service";
import { Exercise } from "../../model";
import { Observable } from "rxjs";
import { of } from "rxjs/observable/of";

@Injectable()
export class ExerciseServiceMock extends ExerciseService {
    exercise: Exercise;
    constructor() {
        super();
        this.exercise = new Exercise();
    }
    getById(id: any): Observable<{}> {
        return of(this.exercise);
    }
    getAll(): Observable<{}[]> {
        return of([this.exercise]);
    }
    save(program: any): Promise<string> {
        //throw new Error("Method not implemented.");
        return new Promise<string>((resolve,reject) => {
            resolve("uid-123");
        });
    }
    update(program: any): Promise<string> {
        //throw new Error("Method not implemented.");
        return new Promise<string>((resolve,reject) => {
            resolve("uid-123");
        });
    }
}