import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddadminuserComponent } from './addadminuser.component';

describe('AddadminuserComponent', () => {
  let component: AddadminuserComponent;
  let fixture: ComponentFixture<AddadminuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddadminuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddadminuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
