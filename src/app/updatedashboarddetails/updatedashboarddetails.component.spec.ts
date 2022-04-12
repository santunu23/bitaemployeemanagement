import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatedashboarddetailsComponent } from './updatedashboarddetails.component';

describe('UpdatedashboarddetailsComponent', () => {
  let component: UpdatedashboarddetailsComponent;
  let fixture: ComponentFixture<UpdatedashboarddetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatedashboarddetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatedashboarddetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
