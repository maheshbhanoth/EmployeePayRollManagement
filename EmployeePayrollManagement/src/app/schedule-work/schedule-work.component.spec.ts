import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleWorkComponent } from './schedule-work.component';

describe('ScheduleWorkComponent', () => {
  let component: ScheduleWorkComponent;
  let fixture: ComponentFixture<ScheduleWorkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScheduleWorkComponent]
    });
    fixture = TestBed.createComponent(ScheduleWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
