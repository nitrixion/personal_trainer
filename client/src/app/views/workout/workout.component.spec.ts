import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutComponent } from './workout.component';
import { WorkoutService, WorkoutServiceMock, ExerciseService, ExerciseServiceMock } from '../../services';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { MaterialModule } from '../../modules/material.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('WorkoutComponent', () => {
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
    fixture = TestBed.createComponent(WorkoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
