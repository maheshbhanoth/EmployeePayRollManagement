import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {

  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService, private router: Router,private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.fetchEmployees();
  }

  fetchEmployees() {
    this.employeeService.getAllEmployees().subscribe(
      employees => {
        this.employees = employees;
      },
      error => {
        console.error('Error fetching employees:', error);
      }
    );
  }
  employeeDetails(id: number){
    this.router.navigate(['employee-details', id]);
  }
  updateEmployee(employeeId: number) {
    this.router.navigate(['adminMenu/updateEmployee', employeeId]);
  }
  deleteEmployee(employeeId: number){
    this.employeeService.deleteEmployee(employeeId).subscribe( data => {
      this.router.navigate(['/adminMenu'], { relativeTo: this.route });
    })
  }


}
