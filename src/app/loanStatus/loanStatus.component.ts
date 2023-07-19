import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loanStatus',
  templateUrl: './loanStatus.component.html',
  styleUrls: ['./loanStatus.component.css']
})
export class LoanStatusComponent implements OnInit {
  getDetails: any;
  approveDetails: any;

  constructor(private http:HttpClient) { }
  status:any="true";

  ngOnInit() {
    const a=sessionStorage.getItem("login");
    if(a)
    {
      this.getDetails=JSON.parse(a);
    }
    this.http.get<any>("http://localhost:3000/approveStatus").subscribe((info)=>{
      const appDet=info.find((c:any)=>{
        return c.name==this.getDetails.firstname
      });
      if(appDet){
        this.approveDetails=appDet;
       this.status="false";
      }
    })
  }

}
