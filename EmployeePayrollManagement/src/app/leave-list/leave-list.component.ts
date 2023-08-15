import { Component } from '@angular/core';
import { LeaveService } from '../leave.service';

@Component({
  selector: 'app-leave-list',
  templateUrl: './leave-list.component.html',
  styleUrls: ['./leave-list.component.css']
})
export class LeaveListComponent {

  leaveList: any[] = [];

  constructor(private leaveListService:LeaveService ) {}

  ngOnInit(): void {
    this.fetchLeaveList();
  }

  fetchLeaveList() {
    this.leaveListService.getLeaveList().subscribe(
      (response: any) => {
        this.leaveList = response;
        console.log('Leave List:', this.leaveList); 
      },
      (error: any) => {
        console.error('Error fetching leave list:', error);
      }
    );
  }

}
