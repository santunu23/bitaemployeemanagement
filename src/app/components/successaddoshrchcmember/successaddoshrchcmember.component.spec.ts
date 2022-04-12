import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessaddoshrchcmemberComponent } from './successaddoshrchcmember.component';

describe('SuccessaddoshrchcmemberComponent', () => {
  let component: SuccessaddoshrchcmemberComponent;
  let fixture: ComponentFixture<SuccessaddoshrchcmemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessaddoshrchcmemberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessaddoshrchcmemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
