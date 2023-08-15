import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-employee-menu',
  templateUrl: './employee-menu.component.html',
  styleUrls: ['./employee-menu.component.css']
})
export class EmployeeMenuComponent {


  
  employeeId:any;

  constructor(private authService: AuthenticationService){}

  ngOnInit(){
    this.employeeId = this.authService.id;
    if(this.employeeId !== null || this.employeeId !== undefined){
      this.isLoggedIn = true
    }
  }

  isLoggedIn:boolean = false;

}
