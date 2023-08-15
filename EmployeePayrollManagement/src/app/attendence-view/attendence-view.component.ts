import { AuthenticationService } from './../authentication.service';
import { Component } from '@angular/core';
import { AttendanceService } from '../attendance.service';

@Component({
  selector: 'app-attendence-view',
  templateUrl: './attendence-view.component.html',
  styleUrls: ['./attendence-view.component.css']
})
export class AttendenceViewComponent {
  attendancedetails:any
    constructor(private attendanceservice:AttendanceService, private authService:AuthenticationService) {}

    ngOnInit(){
      this.getattendancesofspecificemployee()
      console.log(this.attendancedetails)
    }

    getattendancesofspecificemployee() {
      this.attendanceservice.getallattendancesforspecificemployee(this.authService.id).subscribe( 
        (data)=> {this.attendancedetails=data
        console.log(this.attendancedetails)}

      )
    }
}
