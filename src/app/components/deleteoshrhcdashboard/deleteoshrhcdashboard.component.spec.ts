import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteoshrhcdashboardComponent } from './deleteoshrhcdashboard.component';

describe('DeleteoshrhcdashboardComponent', () => {
  let component: DeleteoshrhcdashboardComponent;
  let fixture: ComponentFixture<DeleteoshrhcdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteoshrhcdashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteoshrhcdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
