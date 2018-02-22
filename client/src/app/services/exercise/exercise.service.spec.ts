import { TestBed, inject } from '@angular/core/testing';

import { ExerciseService } from './exercise.service';
import { ExerciseServiceMock } from './exercise.service.mock';
import { Exercise } from '../../model';

describe('ExerciseService', () => {
  const exercise:Exercise = new Exercise();

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{provide: ExerciseService, useClass: ExerciseServiceMock}]
    });
    exercise.id = "uid-123";
  });

  it('should be created', inject([ExerciseService], (service: ExerciseService) => {
    expect(service).toBeTruthy();
  }));

  it('should get at least 1 result from getAll', inject([ExerciseService], (service: ExerciseService) => {
    service.getAll().subscribe((exercises) => {
      expect(exercises.length).toBeGreaterThan(0);
    });
  }));

  it('should get 1 result from getById', inject([ExerciseService], (service: ExerciseService) => {
    service.getById("uid-123").subscribe((exercise) => {
      expect(exercise).toBeTruthy();
    });
  }));

  it('should return the id of the saved workout on save', inject([ExerciseService], (service: ExerciseService) => {
    service.save(exercise).then((id) => {
      expect(id).toEqual(exercise.id);
    });
  }));

  it('should return the id of the saved workout on update', inject([ExerciseService], (service: ExerciseService) => {
    service.save(exercise).then((id) => {
      expect(id).toEqual(exercise.id);
    });
  }));
});
