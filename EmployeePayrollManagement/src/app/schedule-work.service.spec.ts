import { TestBed } from '@angular/core/testing';

import { ScheduleWorkService } from './schedule-work.service';

describe('ScheduleWorkService', () => {
  let service: ScheduleWorkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScheduleWorkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
