import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddoshrchcmemberformComponent } from './addoshrchcmemberform.component';

describe('AddoshrchcmemberformComponent', () => {
  let component: AddoshrchcmemberformComponent;
  let fixture: ComponentFixture<AddoshrchcmemberformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddoshrchcmemberformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddoshrchcmemberformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
