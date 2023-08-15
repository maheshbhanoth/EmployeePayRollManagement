import { EmployeeService } from './../employee.service';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthenticationService } from './../authentication.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private authService:AuthenticationService, private employeeService:EmployeeService){}

  employee:any;
  authData:any;

  registerForm = new FormGroup({
    employee_id:new FormControl(),
    password: new FormControl()
  });

  register() {
    const employeeId = this.registerForm.value.employee_id;
    this.employeeService.getEmployee(employeeId).subscribe((employeeData) => {
      this.employee = employeeData;
      this.authData = {
        password: this.registerForm.value.password,
        employee: this.employee
      };
      this.authService.register(this.authData);
    }); 
  }
}
