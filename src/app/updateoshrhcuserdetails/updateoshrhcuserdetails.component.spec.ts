import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateoshrhcuserdetailsComponent } from './updateoshrhcuserdetails.component';

describe('UpdateoshrhcuserdetailsComponent', () => {
  let component: UpdateoshrhcuserdetailsComponent;
  let fixture: ComponentFixture<UpdateoshrhcuserdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateoshrhcuserdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateoshrhcuserdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
