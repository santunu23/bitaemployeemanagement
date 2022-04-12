import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmemberformComponent } from './addmemberform.component';

describe('AddmemberformComponent', () => {
  let component: AddmemberformComponent;
  let fixture: ComponentFixture<AddmemberformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddmemberformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmemberformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
