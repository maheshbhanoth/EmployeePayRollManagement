import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ScheduleWorkService } from './../schedule-work.service';
import { EmployeeService } from './../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-schedule-work',
  templateUrl: './schedule-work.component.html',
  styleUrls: ['./schedule-work.component.css']
})
export class ScheduleWorkComponent {

  constructor(
    private schedule_work_service: ScheduleWorkService,
    private employeeService: EmployeeService,
    private router:Router
  ) {}

  ngOnInit() {}

  WorkScheduled: any;
  employee: any;

  WorkScheduleForm = new FormGroup({
    employee_id: new FormControl(''),
    date_assigned: new FormControl(''),
    is_work_assigned: new FormControl(''),
    work_description: new FormControl(''),
  });

  assignWork() {
    const employeeId = this.WorkScheduleForm.value.employee_id;
    this.employeeService.getEmployee(employeeId).subscribe((employeeData) => {
      this.employee = employeeData;
      this.WorkScheduled = {
        employee: this.employee,
        date_assigned: this.WorkScheduleForm.value.date_assigned,
        is_work_assigned: this.WorkScheduleForm.value.is_work_assigned,
        work_description: this.WorkScheduleForm.value.work_description,
      };
      console.log(this.WorkScheduled)
      this.schedule_work_service.assignWork(this.WorkScheduled);
      this.clearForm();
      this.router.navigate(['adminMenu'])
    });
  }

  clearForm() {
    this.WorkScheduleForm.patchValue({
      employee_id: null,
      date_assigned: null,
      is_work_assigned: null,
      work_description: null,
    });
    this.employee = null;
  }
}
