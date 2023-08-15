import { AdminSalaryService } from './service/admin/admin-salary.service';
import { SalaryService } from './service/salary/salary.service';
import { ScheduleWorkService } from './schedule-work.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
import { EmployeeMenuComponent } from './employee-menu/employee-menu.component';
import { ScheduleWorkComponent } from './schedule-work/schedule-work.component';
import { ScheduledWorkUpdateComponent } from './scheduled-work-update/scheduled-work-update.component';
import { ScheduledWorkViewsComponent } from './scheduled-work-views/scheduled-work-views.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AdminSalaryComponent } from './admin-salary/admin-salary.component';
import { EmployeeSalaryViewComponent } from './employee-salary-view/employee-salary-view.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { AttendanceUpdateComponent } from './attendance-update/attendance-update.component';
import { AttendenceViewComponent } from './attendence-view/attendence-view.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeUpdateComponent } from './employee-update/employee-update.component';
import { LeaveComponent } from './leave/leave.component';
import { LeaveListComponent } from './leave-list/leave-list.component';
import { EmployeeSpecificLeavesComponent } from './employee-specific-leaves/employee-specific-leaves.component';
import { SignOutComponent } from './sign-out/sign-out.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminMenuComponent,
    EmployeeMenuComponent,
    ScheduleWorkComponent,
    ScheduledWorkUpdateComponent,
    ScheduledWorkViewsComponent,
    RegisterComponent,
    LoginComponent,
    AdminSalaryComponent,
    EmployeeSalaryViewComponent,
    AttendanceComponent,
    AttendanceUpdateComponent,
    AttendenceViewComponent,
    CreateEmployeeComponent,
    EmployeeListComponent,
    EmployeeUpdateComponent,
    LeaveComponent,
    LeaveListComponent,
    EmployeeSpecificLeavesComponent,
    SignOutComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ScheduleWorkService, SalaryService, AdminSalaryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
