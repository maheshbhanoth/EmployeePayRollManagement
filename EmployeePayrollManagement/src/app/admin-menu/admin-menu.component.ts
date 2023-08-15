import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.css']
})
export class AdminMenuComponent {

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
