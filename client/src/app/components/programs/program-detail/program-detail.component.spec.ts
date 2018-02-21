import { async, ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';

import { ProgramDetailComponent } from './program-detail.component';
import { WorkoutService, UserService, UserServiceMock } from '../../../services';


describe('ProgramDetailComponent', () => {
  let injector: TestBed;
  let component: ProgramDetailComponent;
  let fixture: ComponentFixture<ProgramDetailComponent>;
  let service: WorkoutService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramDetailComponent ],
      providers: [
        WorkoutService,
        {provide: UserService, useClass:UserServiceMock},
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
