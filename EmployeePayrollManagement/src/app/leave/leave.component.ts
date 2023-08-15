import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LeaveService } from '../leave.service';


@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.css']
})
export class LeaveComponent {

  leave = { 
    employee_id: '',
    leaveType:'',
    startDate: '',
    endDate: '',
    reason: ''
  };



  leaveList: any[] = [];
  isEditMode = false;

  constructor(
    private leaveService: LeaveService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadLeaveList();
  }
   
  data:any;
  submitLeaveApplication() {
    console.log(this.leave);
    
    this.data = {
      leaveType: this.leave.leaveType,
      startDate: this.leave.startDate,
      endDate: this.leave.endDate,
      reason: this.leave.reason,
      employee: {
          id:parseInt( this.leave.employee_id)
      }
    };
    
    console.log(this.data);
    this.leaveService.applyForLeave(this.data).subscribe((res)=>{
      this.loadLeaveList()
      alert("added")

    },
    (error) => {
      this.loadLeaveList();
    }
    )
    this.clearForm();
  
  }

  clearForm(){
    this.leave.leaveType="",
    this.leave.startDate="",
    this.leave.endDate="",
    this.leave.reason="",
    this.leave.employee_id=""
  }
 
  loadLeaveList() {
    this.leaveService.getAllLeaves().subscribe(
      (data: any[]) => {
        this.leaveList = data;
      },
      (error) => {
        console.log('Error fetching leave list:', error);
      }
    );
  }
  
  updateLeave() {
    console.log(this.leave);
  
    this.data = {
      leaveType: this.leave.leaveType,
      startDate: this.leave.startDate,
      endDate: this.leave.endDate,
      reason: this.leave.reason,
      employee: {
        id: parseInt(this.leave.employee_id)
      }
    };
  
    console.log(this.data);
    this.leaveService.updateLeave(this.id, this.data).subscribe((res)=>
      this.loadLeaveList()
      );
        
        this.cancelUpdate();
      }
  
  

  deleteLeave(id: number) {
    this.leaveService.deleteLeave(id).subscribe(
      
    );
    this.loadLeaveList();
  }

  id:any;

  editdetails:any;

  editLeave(leaveItem: any) {
    this.leave = { ...leaveItem };
    this.editdetails = {...leaveItem}
    this.id =  this.editdetails.id
    console.log(this.id)
    console.log(this.leave)
    this.isEditMode = true;
  }

  cancelUpdate() {
    this.isEditMode = false;
    this.leave = {  employee_id: '', leaveType: '',  startDate: '', endDate: '', reason: '' };
  }


}
