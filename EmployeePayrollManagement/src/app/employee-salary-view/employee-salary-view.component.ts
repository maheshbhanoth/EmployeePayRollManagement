import { EmployeeService } from './../employee.service';

import { AuthenticationService } from './../authentication.service';
import { Component } from '@angular/core';
import { SalaryService } from '../service/salary/salary.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export interface Alert {
  type: string;
  message: string;
}

const ALERTS: Alert[] = [
  {
    type: 'info',
    message: 'Pay Slip is Downloading......',
  },
  { type: 'success', message: 'This is a success alert' },
];

@Component({
  selector: 'app-employee-salary-view',
  templateUrl: './employee-salary-view.component.html',
  styleUrls: ['./employee-salary-view.component.css']
})
export class EmployeeSalaryViewComponent {

  constructor(
    private employeeSalaryService: SalaryService,
    private loginSerivce: AuthenticationService,private employeeService:EmployeeService
  ) {}

  employeeID: any;

  ngOnInit(): void {
    this.gettingEmployeeId();
    this.gettingSalary();
  }

  gettingEmployeeId() {
    this.employeeID = this.loginSerivce.id;
    console.log(this.employeeID);
  }

  SalarySlipsList: any;

  gettingSalary() {
    console.log(this.employeeID);
    this.employeeSalaryService
      .gettingSalarySlipByEmployeeId(this.employeeID)
      .subscribe((res) => {
        this.SalarySlipsList = res;
        console.log(this.SalarySlipsList.id)
        // console.log(this.id, "salary id")
        console.log(this.SalarySlipsList, "gettingSalary()")
      });
  }

 
  salarySlip: boolean = false;

  employeeName: any;
  salrayEmployeeId: string = '';
  employeeCategory: string = '';
  paymentDate: string = '';
  basicSalary: number = 0;
  taxAmount: number = 0.1;

  infoAlerts: any;
  employee:any;
  EmployeesalarySlip: any;



  viewSalarySlip(id: any) {
    this.salarySlip = !this.salarySlip;
    console.log(id);

    this.employeeService.getEmployee(this.loginSerivce.id).subscribe(
      (res)=>{
        this.employee = res
        console.log(this.employee)
        this.employeeName = this.employee.name;
        this.salrayEmployeeId = this.employee.id;
        this.employeeCategory = this.employee.category;
      }
    )

    this.employeeSalaryService.gettingSalaryById(id).subscribe((res) => {
      this.EmployeesalarySlip = res;
      // console.log(this.EmployeesalarySlip)
      for(let i of this.EmployeesalarySlip){
         this.basicSalary = i.amount;
        this.paymentDate = i.salary_credited_date;
      }
      
    });
  }

  // download
  downloadPaySlip() {
    let DATA: any = document.getElementById('salarySlip');
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.save('Salary Pay Slip.pdf');
      this.infoAlerts = [];
      this.reset();
    });
  }

  reset() {}

  calculateTotal() {
    let total = this.basicSalary * this.taxAmount;
    return this.basicSalary - total;
  }

  backButton() {
    this.salarySlip = false;
  }

  close(alert: Alert) {}

}


