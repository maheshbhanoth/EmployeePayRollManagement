import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Leave } from './leave';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeaveService {

  private baseUrl = 'http://localhost:8086'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  // Method to apply for leave
  applyForLeave(leaveData: Leave) {
    return this.http.post<Leave>(`${this.baseUrl+"/applyLeave"}`, leaveData);
  }

  // Method to fetch all leaves
  getAllLeaves() {
    return this.http.get<Leave[]>(`${this.baseUrl+"/getLeaves"}`);
  }

  // Method to fetch a specific leave by ID
  getLeaveById(id: number) {
    return this.http.get<Leave>(`${this.baseUrl+"/getLeave"}/${id}`);
  }

  // Method to update a leave
  updateLeave(id: number, updatedLeave: Leave) {
    return this.http.put<Leave>(`${this.baseUrl+"/updateLeave"}/${id}`, updatedLeave);
  }

  // Method to delete a leave
  deleteLeave(id: number) {
    return this.http.delete(`${this.baseUrl+"/deleteLeave"}/${id}`);
  }
  
  getLeaveList() {
    return this.http.get(`${this.baseUrl+"/getLeaves"}`);
  }

  getLeavesByEmployeeId(id:any):Observable<any>{
    return this.http.get(this.baseUrl + "/getLeavesofEmployee/" + `${id}`);
  }

}
