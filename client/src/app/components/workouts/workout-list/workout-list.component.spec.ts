import { async, ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';

import { WorkoutListComponent } from './workout-list.component';
import { WorkoutService, WorkoutServiceMock } from '../../../services';
import { Router } from '@angular/router';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MaterialModule } from '../../../modules/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { WorkoutEditComponent } from '..';

describe('WorkoutListComponent', () => {
  let injector: TestBed;
  let component: WorkoutListComponent;
  let fixture: ComponentFixture<WorkoutListComponent>;
  let service: WorkoutService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NoopAnimationsModule, FormsModule, ReactiveFormsModule, MaterialModule],
      declarations: [ WorkoutListComponent, WorkoutEditComponent ],
      providers: [
        {provide: WorkoutService, useClass:WorkoutServiceMock},
        {provide: Router,
         useValue: {
           navigateByUrl: function() {}
         }
        }
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    injector = getTestBed();
    service = injector.get(WorkoutService);
    injector.get(Router);
    fixture = TestBed.createComponent(WorkoutListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
