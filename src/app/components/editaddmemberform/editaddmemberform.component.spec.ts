import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaddmemberformComponent } from './editaddmemberform.component';

describe('EditaddmemberformComponent', () => {
  let component: EditaddmemberformComponent;
  let fixture: ComponentFixture<EditaddmemberformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditaddmemberformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditaddmemberformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
