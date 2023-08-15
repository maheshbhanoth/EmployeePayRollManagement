import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SalaryService {

  constructor(private http: HttpClient) {}

  url = 'http://localhost:8086/salary/employee/';

  gettingSalarySlipByEmployeeId(id: any) {
    return this.http.get(this.url + id);
  }

  salaryUrl = 'http://localhost:8086/salary/';

  gettingSalaryById(id: any) {
    return this.http.get(this.salaryUrl + id);
  }
  
}
