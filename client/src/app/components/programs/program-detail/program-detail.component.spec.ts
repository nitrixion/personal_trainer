import { async, ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';

import { ProgramDetailComponent } from './program-detail.component';
import { WorkoutService, UserService, UserServiceMock, ProgramService, ProgramServiceMock, WorkoutServiceMock } from '../../../services';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';


describe('ProgramDetailComponent', () => {
  let injector: TestBed;
  let component: ProgramDetailComponent;
  let fixture: ComponentFixture<ProgramDetailComponent>;
  let workoutService: WorkoutService;
  let programService: ProgramService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramDetailComponent ],
      providers: [
        {provide: UserService, useClass:UserServiceMock},
        {provide: ProgramService, useClass:ProgramServiceMock},
        {provide: WorkoutService, useClass:WorkoutServiceMock},
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
    programService = injector.get(ProgramService);
    fixture = TestBed.createComponent(ProgramDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call refresh on init', () => {
    spyOn(component, 'refresh').and.callThrough();
    component.ngOnInit();
    expect(component.refresh).toHaveBeenCalled();
  });

  it('should get a program on refresh', () => {
    spyOn(programService, 'getById').and.callThrough();
    component.programId = "uid-123";
    component.refresh();
    expect(programService.getById).toHaveBeenCalled();
    //expect(component.program).toBeTruthy();
  });
});
