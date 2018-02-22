import { async, ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';

import { ProgramEditComponent } from './program-edit.component';
import { ProgramService, WorkoutService, ProgramServiceMock, WorkoutServiceMock, UserService, UserServiceMock } from '../../../services';
import { ReactiveFormsModule, ControlContainer, FormsModule, FormBuilder } from '@angular/forms';
import { MaterialModule } from '../../../modules/material.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { WorkoutListComponent, WorkoutEditComponent } from '../../../components';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

describe('ProgramEditComponent', () => {
  let injector: TestBed;
  let component: ProgramEditComponent;
  let fixture: ComponentFixture<ProgramEditComponent>;
  let workoutService: ProgramService;
  let programService: WorkoutService;
  let userService: UserService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NoopAnimationsModule, FormsModule, ReactiveFormsModule, MaterialModule],
      declarations: [ProgramEditComponent, WorkoutListComponent, WorkoutEditComponent],
      providers: [
        FormBuilder,
        { provide: ProgramService, useClass: ProgramServiceMock },
        { provide: WorkoutService, useClass: WorkoutServiceMock },
        { provide: UserService, useClass: UserServiceMock },
        {
          provide: Router,
          useValue: {
            navigateByUrl: function () { }
          }
        },
        {
          provide: ActivatedRoute,
          useValue: {
            params: Observable.of({id: "uid-123"}),
            snapshot: {
              data: {
                action: "create"
              }
            }
          }
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    injector = getTestBed();
    workoutService = injector.get(WorkoutService);
    programService = injector.get(ProgramService);
    userService = injector.get(UserService);
    fixture = TestBed.createComponent(ProgramEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get clients for the logged in user', () => {
    spyOn(userService, 'getClients').and.callThrough();
    component.onRefresh();
    expect(userService.getClients).toHaveBeenCalled();
  });
});
