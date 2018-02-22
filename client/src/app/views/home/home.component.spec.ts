import { async, ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { WorkoutService, WorkoutServiceMock, UserService, UserServiceMock } from '../../services';
import { Router } from '@angular/router';

describe('HomeComponent', () => {
  let injector: TestBed;
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let userService: UserService;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      providers: [
        {provide: UserService, useClass:UserServiceMock},
        {provide: WorkoutService, useClass:WorkoutServiceMock},
        {provide: Router,
          useValue: {
            navigateByUrl: function() {}
          }
         }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    injector = getTestBed();
    userService = injector.get(UserService);
    router = injector.get(Router);
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get current user on init', () => {
    spyOn(userService, 'me').and.callThrough();
    component.ngOnInit();
    expect(userService.me).toHaveBeenCalled();
  });

  it('should navigate on navigateTo', () => {
    spyOn(router, 'navigateByUrl').and.callThrough();
    component.navigateTo("/home");
    expect(router.navigateByUrl).toHaveBeenCalled();
  });
});
