import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScheduleWorkService {

  baseUrl:string = "http://localhost:8086";
  constructor(private httpClient:HttpClient) { }

  assignWork(data:any){
    return this.httpClient.post(this.baseUrl+"/assignWork", data).subscribe(
      (error)=>console.log(error),
      (complete)=>console.log(complete)
      )
  }

  getScheduledWorks():Observable<any>{
    return this.httpClient.get(this.baseUrl+"/scheduledWorks")
  }

  deleteWork(id:any){
    return this.httpClient.delete(this.baseUrl+"/deleteWork?id="+id).subscribe()
  }

  updateWork(id:any, data:any){
    return this.httpClient.put(this.baseUrl+"/updateWork?id="+id, data)
  }

  getWorksOfSpecificEmployee(id:any){
    return this.httpClient.get(this.baseUrl+"/getWorksOfSpecificEmployee?id="+id)
  }

}
