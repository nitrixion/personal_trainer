import { Injectable } from '@angular/core';
import { WorkoutService } from './workout.service';
import { Observable } from 'rxjs';
import { Workout } from '../../model';
import { of } from 'rxjs/observable/of';

@Injectable()
export class WorkoutServiceMock extends WorkoutService {
    workout: Workout;
    constructor() {
        super();
        this.workout = new Workout();
        this.workout.exerciseIds = ["id-123"]
    }

    getAll(): Observable<{}[]> {
        return of([this.workout]);
    }
    getById(id: any): Observable<{}> {
        return of(this.workout);
    }
    save(workout: Workout): Promise<string> {
        return new Promise<string>((resolve,reject) => {
            resolve("uid-123");
        });
    }
    update(workout: Workout): Promise<string> {
        return new Promise<string>((resolve,reject) => {
            resolve("uid-123");
        });
    }
}