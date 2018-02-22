import { async, ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { UserService, UserServiceMock } from '../../services';
import { Router } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, ControlContainer, FormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MaterialModule } from '../../modules/material.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('LoginComponent', () => {
  let injector: TestBed;
  let builder: FormBuilder;
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NoopAnimationsModule, FormsModule, ReactiveFormsModule, MaterialModule],
      declarations: [ LoginComponent ],
      providers: [
        ControlContainer,
        FormBuilder,
        {provide: UserService, useClass:UserServiceMock},
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
    builder = injector.get(FormBuilder);
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
