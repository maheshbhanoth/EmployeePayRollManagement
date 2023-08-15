import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { AttendanceService } from '../attendance.service';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent {

  constructor(
    private attendance_service: AttendanceService,
    private employeeService: EmployeeService,
    private router:Router
  ) {}

  ngOnInit() {}

  Attendance: any;
  employee: any;

  AttendanceForm = new FormGroup({
    employee_id: new FormControl(''),
    date: new FormControl(''),
    check_in: new FormControl(''),
    check_out: new FormControl(''),
    status: new FormControl('')
  });

  markAttendance() {
    const employeeId = this.AttendanceForm.value.employee_id;
    this.employeeService.getEmployee(employeeId).subscribe((employeeData) => {
      this.employee = employeeData;
      this.Attendance = {
        employee: this.employee,
        date: this.AttendanceForm.value.date,
        check_in: this.AttendanceForm.value.check_in,
        check_out: this.AttendanceForm.value.check_out,
        status: this.AttendanceForm.value.status
      };
      console.log(this.Attendance)
      this.attendance_service.markAttendance(this.Attendance);
      this.clearForm();
      this.router.navigateByUrl("/adminMenu");
    });
  }

  clearForm() {
    this.AttendanceForm.patchValue({
      employee_id: null,
      date: null,
      check_in: null,
      check_out: null,
      status: null
    });
    this.employee = null;
  }

}
