import { ProfileComponent } from './profile/profile.component';
import { SignOutComponent } from './sign-out/sign-out.component';
import { LeaveComponent } from './leave/leave.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { AdminSalaryComponent } from './admin-salary/admin-salary.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ScheduledWorkViewsComponent } from './scheduled-work-views/scheduled-work-views.component';
import { ScheduleWorkComponent } from './schedule-work/schedule-work.component';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
import { EmployeeMenuComponent } from './employee-menu/employee-menu.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScheduledWorkUpdateComponent } from './scheduled-work-update/scheduled-work-update.component';
import { EmployeeSalaryViewComponent } from './employee-salary-view/employee-salary-view.component';
import { AttendanceUpdateComponent } from './attendance-update/attendance-update.component';
import { AttendenceViewComponent } from './attendence-view/attendence-view.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeUpdateComponent } from './employee-update/employee-update.component';
import { EmployeeSpecificLeavesComponent } from './employee-specific-leaves/employee-specific-leaves.component';

const routes: Routes = [
  {
    path: 'employeeMenu',
    component: EmployeeMenuComponent,
    children: [
      { path: 'viewScheduledWorks', component:ScheduledWorkViewsComponent},
      {path:"viewSalary", component:EmployeeSalaryViewComponent},
      {path:"viewAttendence", component:AttendenceViewComponent},
      {path:"myLeaves", component:EmployeeSpecificLeavesComponent},
      {path:"profile", component:ProfileComponent},
      {path:"signOut", component:SignOutComponent},
    ]
  },
  {
    path: 'adminMenu',
    component: AdminMenuComponent,
    children: [
      { path: 'assignWork', component: ScheduleWorkComponent },
      {path:'updateOrDeleteWork', component:ScheduledWorkUpdateComponent},
      {path:"markAttendance", component:AttendanceComponent},
      {path:"updateOrDeleteAttendance", component:AttendanceUpdateComponent},
      {path:"createEmployee", component:CreateEmployeeComponent},
      {path:"viewEmployees", component:EmployeeListComponent},
      {path:"updateEmployee/:id", component:EmployeeUpdateComponent},
      {path:"addUpdateDeleteLeaves", component:LeaveComponent},
      {path:"adminSalary", component:AdminSalaryComponent},
      {path:"profile", component:ProfileComponent},
      {path:"signOut", component:SignOutComponent},
    ]
  },
  {
    path:"login",component:LoginComponent
  },
  {
    path:"**", component:RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
