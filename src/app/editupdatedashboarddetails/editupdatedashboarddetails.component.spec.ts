import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditupdatedashboarddetailsComponent } from './editupdatedashboarddetails.component';

describe('EditupdatedashboarddetailsComponent', () => {
  let component: EditupdatedashboarddetailsComponent;
  let fixture: ComponentFixture<EditupdatedashboarddetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditupdatedashboarddetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditupdatedashboarddetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
