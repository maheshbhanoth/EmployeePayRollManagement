import { AuthenticationService } from './../authentication.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { ScheduleWorkService } from '../schedule-work.service';

@Component({
  selector: 'app-scheduled-work-views',
  templateUrl: './scheduled-work-views.component.html',
  styleUrls: ['./scheduled-work-views.component.css']
})
export class ScheduledWorkViewsComponent {

  constructor(
    private schedule_work_service: ScheduleWorkService,
    private employeeService: EmployeeService, private router:Router,
    private authService: AuthenticationService
  ) {}

  WorkScheduled: any;

  ngOnInit() {
    this.getAllScheduledWorks();
  }

  getAllScheduledWorks(){
    this.schedule_work_service.getWorksOfSpecificEmployee(this.authService.id).subscribe(
      (data)=>{this.WorkScheduled = data}
    )
  }

}
