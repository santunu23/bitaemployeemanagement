import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OshhcdashboardComponent } from './oshhcdashboard.component';

describe('OshhcdashboardComponent', () => {
  let component: OshhcdashboardComponent;
  let fixture: ComponentFixture<OshhcdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OshhcdashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OshhcdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
