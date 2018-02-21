import { async, ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';

import { ClientListComponent } from './client-list.component';
import { UserService } from '../../../services';
import { MaterialModule } from '../../../modules/material.module';
import { of } from 'rxjs/observable/of';
import { User } from '../../../model';

describe('ClientListComponent', () => {
  let component: ClientListComponent;
  let fixture: ComponentFixture<ClientListComponent>;
  let injector: TestBed;
  let service: UserService;

  let serviceStub = {
    getClients: function(){
      let promise = new Promise<User[]>((resolve,reject) => {
        resolve([]);
      });
      return promise;
    },
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule],
      declarations: [ ClientListComponent ],
      providers: [{ provide: UserService, useValue: serviceStub }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientListComponent);
    component = fixture.componentInstance;
    injector = getTestBed();
    service = injector.get(UserService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get a list of the logged in users clients', () => {
    spyOn(service, 'getClients').and.callThrough();
    component.ngOnInit();
    expect(service.getClients).toHaveBeenCalled();
  });
});
