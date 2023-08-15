import { TestBed } from '@angular/core/testing';

import { AdminSalaryService } from './admin-salary.service';

describe('AdminSalaryService', () => {
  let service: AdminSalaryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminSalaryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
