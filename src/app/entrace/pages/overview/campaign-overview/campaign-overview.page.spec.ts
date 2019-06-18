import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignOverviewPage } from './campaign-overview.page';

describe('HomePage', () => {
  let component: CampaignOverviewPage;
  let fixture: ComponentFixture<CampaignOverviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaignOverviewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignOverviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
