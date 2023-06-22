import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UsersComponent } from '../users/users.component';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-loanDetails',
  templateUrl: './loanDetails.component.html',
  styleUrls: ['./loanDetails.component.css']
})
export class LoanDetailsComponent implements OnInit {


  constructor(private http:HttpClient, private fb:FormBuilder) { }
  getDetails:any;
  detailOne: any;
  detailTwo: any;
  detailThree: any;
  ngOnInit() {

    const a=sessionStorage.getItem("loanDetail");
    if(a)
    {
      this.detailOne=JSON.parse(a);
    }
    this.http.get<any>("http://localhost:3000/studyInfo/"+this.detailOne.id).subscribe((info2)=>{
      this.detailTwo=info2
    });
    this.http.get<any>("http://localhost:3000/accFormInfo/"+this.detailOne.id).subscribe((info3)=>{
      this.detailThree=info3
    });
    }

    cancelForm=this.fb.group({
      message:[,Validators.required]
    })

    approve(){
      var body={
        "name":this.detailOne.firstname,
        "phoneNo":this.detailOne.Phoneno,
        "status":"Approved!"
      }
      this.http.post<any>("http://localhost:3000/approveStatus",body).subscribe((data)=>{
        alert("Approved")
      })
    }
    denied(){
      var body={
        "name":this.detailOne.firstname,
        "phoneNo":this.detailOne.Phoneno,
        "status":this.cancelForm.value.message
      }
      var body2={
        "registerstatus":""
      }
      this.http.post<any>("http://localhost:3000/approveStatus",body).subscribe((data)=>{
        alert("Approved"+ this.cancelForm.value.message)
      })

      this.http.delete<any>("http://localhost:3000/personalInfo/"+this.detailOne.id).subscribe(()=>{

      });
      this.http.delete<any>("http://localhost:3000/studyInfo/"+this.detailOne.id).subscribe(()=>{

      });
      this.http.delete<any>("http://localhost:3000/accFormInfo/"+this.detailOne.id).subscribe(()=>{
        alert("Removed")
      });
      this.http.delete<any>("http://localhost:3000/ValidId/"+this.detailOne.id).subscribe((data)=>{
        alert("Deneid"+ this.cancelForm.value.message)
      })
    }
}




