import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduledWorkViewsComponent } from './scheduled-work-views.component';

describe('ScheduledWorkViewsComponent', () => {
  let component: ScheduledWorkViewsComponent;
  let fixture: ComponentFixture<ScheduledWorkViewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScheduledWorkViewsComponent]
    });
    fixture = TestBed.createComponent(ScheduledWorkViewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
