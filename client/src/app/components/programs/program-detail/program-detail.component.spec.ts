import { async, ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';

import { ProgramDetailComponent } from './program-detail.component';
import { WorkoutService, UserService, UserServiceMock, ProgramService, ProgramServiceMock, WorkoutServiceMock } from '../../../services';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';


describe('ProgramDetailComponent', () => {
  let injector: TestBed;
  let component: ProgramDetailComponent;
  let fixture: ComponentFixture<ProgramDetailComponent>;
  let service: WorkoutService;

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
    service = injector.get(WorkoutService);
    fixture = TestBed.createComponent(ProgramDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
