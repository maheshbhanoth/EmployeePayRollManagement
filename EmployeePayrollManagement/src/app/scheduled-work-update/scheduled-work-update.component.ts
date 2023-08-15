import { ChangeDetectorRef, Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { ScheduleWorkService } from '../schedule-work.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-scheduled-work-update',
  templateUrl: './scheduled-work-update.component.html',
  styleUrls: ['./scheduled-work-update.component.css']
})
export class ScheduledWorkUpdateComponent {

  constructor(
    private schedule_work_service: ScheduleWorkService,
    private employeeService: EmployeeService, private router:Router,
  ) {}

  WorkScheduled: any;
  employee: any;
  showForm:boolean = false;

  ngOnInit() {
    this.getAllScheduledWorks();
  }

  getAllScheduledWorks(){
    this.schedule_work_service.getScheduledWorks().subscribe(
      (data)=>{this.WorkScheduled = data}
    )
  }

  updateWork(data: any) {
    this.showForm = true;

    // // Disable the employee_id control
    // this.WorkScheduleForm.get('employee_id')?.disable();
    // this.WorkScheduleForm.get('id')?.disable()

    this.WorkScheduleForm.patchValue({
      employee_id: data.employee_id,
      id:data.id,
      date_assigned: data.date_assigned,
      is_work_assigned: data.is_work_assigned,
      work_description: data.work_description,
    });
  }

  closeForm(){
    this.showForm = false;
  }

  saveUpdatedWork(){
    console.log(this.WorkScheduleForm.value.id)
    const employeeId = this.WorkScheduleForm.value.employee_id;
    this.employeeService.getEmployee(employeeId).subscribe((employeeData) => {
      this.employee = employeeData;
      this.WorkScheduled = {
        employee: this.employee,
        date_assigned: this.WorkScheduleForm.value.date_assigned,
        is_work_assigned: this.WorkScheduleForm.value.is_work_assigned,
        work_description: this.WorkScheduleForm.value.work_description,
      };
      console.log(this.WorkScheduled)
      this.schedule_work_service.updateWork(this.WorkScheduleForm.value.id,this.WorkScheduled).subscribe(
        (res)=>console.log("updated...")
      );
    });
    this.closeForm();
    this.router.navigate(["/adminMenu"])
  }

  WorkScheduleForm = new FormGroup({
    employee_id: new FormControl(''),
    id: new FormControl(''),
    date_assigned: new FormControl(''),
    is_work_assigned: new FormControl(''),
    work_description: new FormControl(''),
  });

  

  clearForm() {
    this.WorkScheduleForm.patchValue({
      employee_id: null,
      date_assigned: null,
      is_work_assigned: null,
      work_description: null,
    });
    this.employee = null;
  }


  deleteWork(id: any) {
    this.schedule_work_service.deleteWork(id)
    console.log("Deleted...");
    this.router.navigate(['/adminMenu']);
  }



}
