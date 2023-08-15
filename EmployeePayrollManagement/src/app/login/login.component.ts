import { EmployeeService } from './../employee.service';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthenticationService } from './../authentication.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private authService: AuthenticationService, private employeeService: EmployeeService, private router: Router ) { }

  EmployeeID: any;

  ngOnInit(): void {
    this.authService.employeeId$.subscribe(
      (employeeId) => {
        this.EmployeeID = employeeId;
      }
    );
  }

  loginForm = new FormGroup({
    employee_id: new FormControl(),
    password: new FormControl()
  });

  login() {
    const employeeId = this.loginForm.value.employee_id;
    const password = this.loginForm.value.password;

    this.employeeService.getEmployee(employeeId).subscribe(
      (employeeData) => {
        const authData = {
          password: password,
          employee: employeeData
        };

        this.authService.login(authData)
        // console.log(this.EmployeeID)
         // Redirect to **Menu after successful login
        if(employeeData.role.toLowerCase() == "admin"){
          this.router.navigate(['/adminMenu']);
        }else if(employeeData.role.toLowerCase() == "employee"){
          this.router.navigate(['/employeeMenu']);
        }
       
        
      },
      (employeeError) => {
        console.error('Employee retrieval error:', employeeError);
        // Handle employee retrieval error here
      }
    );
    console.log(this.EmployeeID)
  }

}
