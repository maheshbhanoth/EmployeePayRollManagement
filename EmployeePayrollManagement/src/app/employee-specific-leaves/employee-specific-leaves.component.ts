import { AuthenticationService } from './../authentication.service';
import { LeaveService } from './../leave.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-specific-leaves',
  templateUrl: './employee-specific-leaves.component.html',
  styleUrls: ['./employee-specific-leaves.component.css']
})
export class EmployeeSpecificLeavesComponent {

  constructor(private leaveService:LeaveService, private authService:AuthenticationService){}

  employeeLeaves:any;

  ngOnInit(){
    this.getLeavesOfSpecificEmployee();
  }
  getLeavesOfSpecificEmployee(){
    this.leaveService.getLeavesByEmployeeId(this.authService.id).subscribe(
      (data)=>this.employeeLeaves = data
    )
  }

}
