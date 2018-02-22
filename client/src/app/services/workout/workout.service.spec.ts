import { TestBed, inject } from '@angular/core/testing';

import { WorkoutService } from './workout.service';
import { Workout } from '../../model';
import { WorkoutServiceMock } from '.';

describe('WorkoutService', () => {
  const workout:Workout = new Workout();
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{provide: WorkoutService, useClass: WorkoutServiceMock}]
    });
    workout.id = "uid-123";
  });

  it('should be created', inject([WorkoutService], (service: WorkoutService) => {
    expect(service).toBeTruthy();
  }));

  it('should be created', inject([WorkoutService], (service: WorkoutService) => {
    expect(service).toBeTruthy();
  }));

  it('should get at least 1 result from getAll', inject([WorkoutService], (service: WorkoutService) => {
    service.getAll().subscribe((workouts) => {
      expect(workouts.length).toBeGreaterThan(0);
    });
  }));

  it('should get 1 result from getById', inject([WorkoutService], (service: WorkoutService) => {
    service.getById("uid-123").subscribe((workout) => {
      expect(workout).toBeTruthy();
    });
  }));

  it('should return the id of the saved workout on save', inject([WorkoutService], (service: WorkoutService) => {
    service.save(this.workout).then((id) => {
      expect(id).toEqual(this.workout.id);
    });
  }));

  it('should return the id of the saved workout on update', inject([WorkoutService], (service: WorkoutService) => {
    service.save(this.workout).then((id) => {
      expect(id).toEqual(this.workout.id);
    });
  }));
});
