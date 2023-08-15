import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  baseUrl = "http://localhost:8086"
  constructor(private httpClient:HttpClient) { }

  getEmployee(id: any): Observable<any> {
    return this.httpClient.get(`http://localhost:8086/employee?id=${id}`);
  }
  

  createEmployee(employee: Employee): Observable<Object> {
    return this.httpClient.post(this.baseUrl+"/createEmployee", employee);
  }

  getAllEmployees(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(this.baseUrl+"/getAllemployees");
  }

  updateEmployee(id: number, employee: Employee): Observable<Object> {
    return this.httpClient.put(`${this.baseUrl+"/employees"}/${id}`, employee); 
  }

  deleteEmployee(id: number): Observable<Object>{
    return this.httpClient.delete("http://localhost:8086/employees/"+id);
  }


}
