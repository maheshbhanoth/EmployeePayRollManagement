import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.css']
})
export class EmployeeUpdateComponent {

  employeeId: number=0;
  employee: Employee = new Employee();
  constructor(private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.employeeId = this.route.snapshot.params['id'];

    this.employeeService.getEmployee(this.employeeId).subscribe(data => {
      this.employee = data;
    }, error => console.log(error));
  }

  onSubmit() {
    this.employeeService.updateEmployee(this.employeeId, this.employee).subscribe(data => {
      this.router.navigate(['/adminMenu/viewEmployees'], { relativeTo: this.route });

    }, error => console.log(error));
  }
  

  // goToEmployeeList(){
  //   this.router.navigate(['/adminMenu']);
  // }

}
