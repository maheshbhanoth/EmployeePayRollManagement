import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduledWorkUpdateComponent } from './scheduled-work-update.component';

describe('ScheduledWorkUpdateComponent', () => {
  let component: ScheduledWorkUpdateComponent;
  let fixture: ComponentFixture<ScheduledWorkUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScheduledWorkUpdateComponent]
    });
    fixture = TestBed.createComponent(ScheduledWorkUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
