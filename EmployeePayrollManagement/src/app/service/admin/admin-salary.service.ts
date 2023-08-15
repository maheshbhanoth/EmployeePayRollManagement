import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminSalaryService {

  constructor(private http: HttpClient) {}

  url = 'http://localhost:8086/salary';

  gettingSalaryDetails() {
    return this.http.get(this.url);
  }

  insertSalary(body: any) {
    return this.http.post(this.url, body);
  }

  updateSalary(id: number, body: any) {
    return this.http.put(this.url + '/' + id, body);
  }

  gettingsalarydetailsById(id: number) {
    return this.http.get(this.url + '/' + id);
  }

  deleteById(id: number) {
    return this.http.delete(this.url + '/' + id);
  }

  salaryEmp = 'http://localhost:4000/salary/employee/';

  getBySalaryIdEmployeeId(id: number) {
    return this.http.get(this.salaryEmp + id);
  }
 
}
