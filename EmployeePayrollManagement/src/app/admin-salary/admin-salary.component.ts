import { EmployeeService } from '../employee.service';
import { SalaryService } from '../service/salary/salary.service';
import { AdminSalaryService } from './../service/admin/admin-salary.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-salary',
  templateUrl: './admin-salary.component.html',
  styleUrls: ['./admin-salary.component.css']
})
export class AdminSalaryComponent {

   constructor(
    private salaryService: AdminSalaryService,
    private employeeService : EmployeeService

  ) {}

  ngOnInit(): void {
    this.gettingSalaryDetails();
  }

  salaryDetailsList: any;

  gettingSalaryDetails() {
    this.salaryService.gettingSalaryDetails().subscribe((res) => {
      console.log(res);
      this.salaryDetailsList = res;
    });
  }

  // getBy EmployeeID

  salaryTable: boolean = false;

  salary: string = '';
  date: string = '';
  employeeId: number = 0;
  salaryId: number = 0;

  employeeDetails: any;

  salaryListData: any;

  update(salaryid: any) {
    this.salaryTable = true;
    this.isupdateSalary = true;
    console.log(salaryid);
    this.salaryService.gettingsalarydetailsById(salaryid).subscribe((res) => {
      this.salaryListData = res;
      console.log(res)
      this.employeeDetails = this.salaryListData.employee;
      this.salaryId = salaryid;
      

      for(let i of this.salaryListData){
        this.employeeId = i.employee_id;
        this.salary = i.amount;
        this.date = i.salary_credited_date;
        this.getEmployee()
      }

    });
  }

  getEmployee(){
    this.employeeService.getEmployee(this.employeeId).subscribe(
      (res)=>this.employeeDetails = res
    )
  }

  isupdateSalary: boolean = false;

  updateSalary() {
    let data = {
      amount: this.salary,
      salary_credited_date: this.date,
      employee: this.employeeDetails,
    };

    this.salaryService.updateSalary(this.salaryId, data).subscribe((res) => {
      console.log(res);
      alert('Salary Updated');
      this.isupdateSalary = false;
      this.gettingSalaryDetails();
      this.salaryTable = false;
    });

    console.log(data);
  }

  // addsalary
  isAddSalary: boolean = false;

  addButton() {
    this.isAddSalary = !this.isAddSalary;
    this.salaryTable = !this.salaryTable;
    this.isupdateSalary = false;

    this.salary = '';
    this.date = '';
    this.employeeId = 0;
    this.salaryId = 0;
  }

  addEmployeeDetails: any;

  addSalary() {
    console.log(this.employeeId);
    this.employeeService.getEmployee(this.employeeId).subscribe(
      (res) => {
        this.addEmployeeDetails = res;

        let data = {
          amount: this.salary,
          salary_credited_date: this.date,
          employee: this.addEmployeeDetails,
        };
        console.log(data);

        this.salaryService.insertSalary(data).subscribe(
          (res) => {
            alert('Salary Added');
            this.isAddSalary = false;
            this.salaryTable = false;
            this.gettingSalaryDetails();

            this.salary = '';
            this.date = '';
            this.employeeId = 0;
            this.salaryId = 0;
          },
          (error) => {
            alert('Employee Not Added');
          }
        );
      },
      (error) => {
        alert('Employee Not Found');
      }
    );
  }

  delete(id: any) {
    this.salaryService.deleteById(id).subscribe((res) => {
      alert('Salary Deleted');
      this.gettingSalaryDetails();
    });
  }

}
