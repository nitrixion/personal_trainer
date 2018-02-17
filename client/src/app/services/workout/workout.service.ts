import { Injectable } from '@angular/core';
import { WorkoutResource } from './workout.resource';
import { Observable } from 'rxjs';

@Injectable()
export class WorkoutService {

  constructor(private mock: WorkoutResource) { }

  public getAllWorkouts() {
    return Observable.of(this.mock.getWorkouts());
  }

}
