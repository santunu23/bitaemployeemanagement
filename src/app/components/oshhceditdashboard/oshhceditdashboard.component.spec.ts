import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OshhceditdashboardComponent } from './oshhceditdashboard.component';

describe('OshhceditdashboardComponent', () => {
  let component: OshhceditdashboardComponent;
  let fixture: ComponentFixture<OshhceditdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OshhceditdashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OshhceditdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
