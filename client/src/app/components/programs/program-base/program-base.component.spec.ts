// NOTE: This component's functionality is tested in program-detail.component.spec.ts




// import { async, ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';

// import { ProgramBaseComponent } from './program-base.component';
// import { ProgramDetailComponent } from '..';
// import { of } from 'rxjs/observable/of';
// import { ActivatedRoute } from '@angular/router';
// import { ProgramService, WorkoutService, UserService, UserServiceMock} from '../../../services';
// import { AngularFireDatabase } from 'angularfire2/database';
// import { AngularFireDatabaseMock } from '../../../../test/';

// describe('ProgramBaseComponent(using ProgramDetailComponent)', () => {
//   let injector: TestBed;
//   let programService: ProgramService;
//   let workoutService: WorkoutService;
//   let userService: UserService;
//   let component: ProgramDetailComponent;
//   let fixture: ComponentFixture<ProgramDetailComponent>;
//   let route: ActivatedRoute;

//   let stubRoute = () => of({
//     "programId":"id-123"
//   })

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ ProgramDetailComponent ],
//       providers: [
//         ProgramService, 
//         WorkoutService,
//         {provide: UserService, useClass:UserServiceMock},
//         {provide: ActivatedRoute, useValue:stubRoute},
//         {provide: AngularFireDatabase, useClass:AngularFireDatabaseMock}]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     injector = getTestBed();
//     programService = injector.get(ProgramService);
//     workoutService = injector.get(WorkoutService);
//     userService = injector.get(UserService);
//     fixture = TestBed.createComponent(ProgramDetailComponent);
//     component = fixture.componentInstance;
//     route = injector.get(ActivatedRoute);
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
