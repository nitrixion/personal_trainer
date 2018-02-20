import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramBaseComponent } from './program-base.component';

describe('ProgramBaseComponent', () => {
  let component: ProgramBaseComponent;
  let fixture: ComponentFixture<ProgramBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
