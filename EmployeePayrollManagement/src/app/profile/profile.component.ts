import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { AuthenticationService } from './../authentication.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  constructor(private loginService: AuthenticationService, private employeeService:EmployeeService, private route:Router) {}

  ngOnInit(): void {
    this.gettingLoginDetails();

  }

  //getting login details of the person
  details:any;
  employeeId: any = '';
  employeeName: any = '';
  department: any = '';
  mail_id:any = "";
  gender:any = "";
  role:any="";

  gettingLoginDetails() {
    let details = this.employeeService.getEmployee(this.loginService.id).subscribe(
      (data)=>{this.details = data,
      this.employeeId = this.details.id,
      this.employeeName=this.details.name,
      this.department = this.details.category,
      this.mail_id = this.details.mail_id,
      this.gender = this.details.gender,
      this.role = this.details.role});
  }

  //edit
  editProfile() {
    this.isupdateEmployee = !this.isupdateEmployee;
    this.employee.name = this.employeeName;
    this.employee.mail_id = this.mail_id;
    this.employee.gender = this.gender
    this.employee = {
      name: this.employeeName,
      category:this.department,
      role:this.role,
      gender: this.gender,
      mail_id: this.mail_id,
    };
  }

  
  employee: any = {
    name: "",
    category: "",
    role: "",
    gender: "",
    mail_id: "",
  };

  name: string = '';
  category: string = '';

  isupdateEmployee: boolean = false;
  updateEmployee() {
      console.log(this.department, this.role, this.mail_id)
      console.log(this.employee)
      this.employeeService.updateEmployee(this.employeeId, this.employee).subscribe(data => {
        console.log("Employee details updated")
      });
      this.isupdateEmployee = false;
      this.route.navigate(["/employeeMenu"])
  }


}
