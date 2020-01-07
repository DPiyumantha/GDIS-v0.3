import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceChartsComponent } from './attendance-charts.component';

describe('AttendanceChartsComponent', () => {
  let component: AttendanceChartsComponent;
  let fixture: ComponentFixture<AttendanceChartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttendanceChartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendanceChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
