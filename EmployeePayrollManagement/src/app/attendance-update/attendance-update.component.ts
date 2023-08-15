import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AttendanceService } from '../attendance.service';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-attendance-update',
  templateUrl: './attendance-update.component.html',
  styleUrls: ['./attendance-update.component.css']
})
export class AttendanceUpdateComponent {

  constructor(
    private attendance_service: AttendanceService,
    private employeeService: EmployeeService, private router:Router,
  ) {}

  MarkedAttendance: any;
  employee: any;
  showForm:boolean = false;

  ngOnInit() {
    this.getAllMarkedAttendance();
  }

  getAllMarkedAttendance(){
    this.attendance_service.getMarkedAttendances().subscribe(
      (data)=>{this.MarkedAttendance = data}
    )
  }

  updateAttendance(data: any) {
    this.showForm = true;


    this.AttendanceForm.patchValue({
      employee_id: data.employee_id,
      id:data.id,
      date: data.date,
      check_in: data.check_in,
      check_out: data.check_out,
      status: data.ststus,
    });
  }

  closeForm(){
    this.showForm = false;
  }

  saveUpdatedAttendance(){
    console.log(this.AttendanceForm.value.id)
    const employeeId = this.AttendanceForm.value.employee_id;
    this.employeeService.getEmployee(employeeId).subscribe((employeeData) => {
      this.employee = employeeData;
      this.MarkedAttendance = {
        id: this.AttendanceForm.value.id,
        employee: this.employee,
        date: this.AttendanceForm.value.date,
        check_in: this.AttendanceForm.value.check_in,
        check_out: this.AttendanceForm.value.check_out,
        status: this.AttendanceForm.value.status,
      };
      console.log(this.MarkedAttendance)
      this.attendance_service.updateAttendance(this.AttendanceForm.value.id,this.MarkedAttendance).subscribe(
        (res)=>console.log("Updated ! ")
      );
    });
    this.closeForm();
    this.router.navigateByUrl("/adminMenu");
  }

  AttendanceForm = new FormGroup( {

    employee_id: new FormControl(''),
    id: new FormControl(''),
    date: new FormControl(''),
    check_in: new FormControl(''),
    check_out: new FormControl(''),
    status: new FormControl(''),
  }
  );

  

  clearForm() {
    this.AttendanceForm.patchValue({
      employee_id: null,
      date: null,
      check_in: null,
      check_out: null,
      status: null,
    });
    this.employee = null;
  }


  deleteattendance(id: any) {
    this.attendance_service.deleteattendance(id)
    console.log("Deleted ! ");
    this.router.navigateByUrl("/adminMenu");
  }

}
