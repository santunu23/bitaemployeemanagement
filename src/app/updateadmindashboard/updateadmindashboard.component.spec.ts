import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateadmindashboardComponent } from './updateadmindashboard.component';

describe('UpdateadmindashboardComponent', () => {
  let component: UpdateadmindashboardComponent;
  let fixture: ComponentFixture<UpdateadmindashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateadmindashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateadmindashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
