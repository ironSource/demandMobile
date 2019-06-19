import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptimizeModalPage } from './optimize-modal.page';

describe('OptimizeModalPage', () => {
  let component: OptimizeModalPage;
  let fixture: ComponentFixture<OptimizeModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptimizeModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptimizeModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
