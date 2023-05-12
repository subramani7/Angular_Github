import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {

  constructor(private client:HttpClient) { }
  addUserInfo(data:any){
    return this.client.post("http://localhost:3000/users",data);
  }
  addPersonalInfo(data:any){
    return this.client.post("http://localhost:3000/personalInfo",data);
  }

getData(): Observable <any>{
 return this.client.get("http://localhost:3000/users");
}
getPersonalInfo():Observable<any>{
  return this.client.get("http://localhost:3000/personalInfo");
}
}
