import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginAsPage } from './login-as.page';

describe('LoginAsPage', () => {
  let component: LoginAsPage;
  let fixture: ComponentFixture<LoginAsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginAsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginAsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
