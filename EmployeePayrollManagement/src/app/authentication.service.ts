import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  baseUrl = "http://localhost:8086"
  id:any;
  private employeeIdSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public employeeId$: Observable<any> = this.employeeIdSubject.asObservable();

  constructor(private httpClient: HttpClient) { }

  register(data:any){
    this.httpClient.post(this.baseUrl+"/register", data).subscribe(
      (res)=>console.log(res)
    )
  }

  login(data:any){
    this.httpClient.post(this.baseUrl + "/login", data).subscribe(
      (data) => {
        this.employeeIdSubject.next(data);
        this.id = data // Emit the employeeId value
      },
    );
  }

}
