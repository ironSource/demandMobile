import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntracePage } from './entrace.page';

describe('EntracePage', () => {
  let component: EntracePage;
  let fixture: ComponentFixture<EntracePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntracePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntracePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
