import { async, ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';

import { WorkoutComponent } from './workout.component';
import { WorkoutService, WorkoutServiceMock, ExerciseService, ExerciseServiceMock } from '../../services';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { MaterialModule } from '../../modules/material.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Workout } from '../../model';

describe('WorkoutComponent', () => {
  let injector: TestBed;
  let workoutService: WorkoutService;
  let exerciseService: ExerciseService;
  let component: WorkoutComponent;
  let fixture: ComponentFixture<WorkoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NoopAnimationsModule,  MaterialModule],
      declarations: [ WorkoutComponent ],
      providers: [
        {provide: WorkoutService, useClass:WorkoutServiceMock},
        {provide: ExerciseService, useClass:ExerciseServiceMock},
        { provide: ActivatedRoute,
          useValue: {
            params: Observable.of({id: "uid-123"})
          }
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    injector = getTestBed();
    workoutService = injector.get(WorkoutService);
    exerciseService = injector.get(ExerciseService);
    fixture = TestBed.createComponent(WorkoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get workout based on route param in init ', () => {
    spyOn(workoutService, 'getById').and.callThrough();
    component.ngOnInit();
    expect(workoutService.getById).toHaveBeenCalled();
  });

  it('should get exercises from the loaded workout ', () => {
    component.workout = new Workout();
    component.workout.exerciseIds = ["uid-123"];
    spyOn(exerciseService, 'getById').and.callThrough();
    component.getExercises();
    expect(exerciseService.getById).toHaveBeenCalled();
    expect(component.exercises.length).toBeGreaterThan(0);
  });
});
