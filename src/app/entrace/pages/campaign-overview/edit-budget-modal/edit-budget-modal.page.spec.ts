import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBudgetModalPage } from './optimize-modal.page';

describe('OptimizeModalPage', () => {
  let component: EditBudgetModalPage;
  let fixture: ComponentFixture<EditBudgetModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditBudgetModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBudgetModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
