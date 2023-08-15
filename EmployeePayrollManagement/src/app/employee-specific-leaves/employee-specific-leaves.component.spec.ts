import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeSpecificLeavesComponent } from './employee-specific-leaves.component';

describe('EmployeeSpecificLeavesComponent', () => {
  let component: EmployeeSpecificLeavesComponent;
  let fixture: ComponentFixture<EmployeeSpecificLeavesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeSpecificLeavesComponent]
    });
    fixture = TestBed.createComponent(EmployeeSpecificLeavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
