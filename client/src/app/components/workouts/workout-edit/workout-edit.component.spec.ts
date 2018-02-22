import { async, ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';

import { WorkoutEditComponent } from './workout-edit.component';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ProgramService, WorkoutService, ProgramServiceMock, WorkoutServiceMock } from '../../../services';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Workout } from '../../../model';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../../../modules/material.module';


describe('WorkoutEditComponent', () => {
  let injector: TestBed;
  let builder: FormBuilder;
  let component: WorkoutEditComponent;
  let fixture: ComponentFixture<WorkoutEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NoopAnimationsModule, FormsModule, ReactiveFormsModule, MaterialModule],
      declarations: [ WorkoutEditComponent ],
      providers: [
        FormBuilder,
        {provide: ProgramService, useClass:ProgramServiceMock},
        {provide: WorkoutService, useClass:WorkoutServiceMock},
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    injector = getTestBed();
    builder = injector.get(FormBuilder);
    fixture = TestBed.createComponent(WorkoutEditComponent);
    component = fixture.componentInstance;
    component.workout = new Workout();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
