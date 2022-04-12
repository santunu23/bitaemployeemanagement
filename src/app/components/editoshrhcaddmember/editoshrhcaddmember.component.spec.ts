import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditoshrhcaddmemberComponent } from './editoshrhcaddmember.component';

describe('EditoshrhcaddmemberComponent', () => {
  let component: EditoshrhcaddmemberComponent;
  let fixture: ComponentFixture<EditoshrhcaddmemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditoshrhcaddmemberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditoshrhcaddmemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
