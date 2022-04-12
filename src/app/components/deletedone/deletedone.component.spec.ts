import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletedoneComponent } from './deletedone.component';

describe('DeletedoneComponent', () => {
  let component: DeletedoneComponent;
  let fixture: ComponentFixture<DeletedoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletedoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletedoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
