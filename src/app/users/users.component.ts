import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ValidateService } from '../validate.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  details:any;
  getDetails: any;
  constructor(private service:ValidateService,private route:Router,private http:HttpClient) { }

  ngOnInit() {
    this.service.getData().subscribe(res =>{
      this.details=res;
    })
  }
  a:any=""
  loanstatus(detail:any){
    this.http.get<any>("http://localhost:3000/personalInfo").subscribe(info1=>{
        const loan=info1.find((b:any)=>{
          return b.firstname==detail.firstname
        });
        if(loan){
        this.a=loan;
        sessionStorage.setItem("loanDetail",JSON.stringify(loan));
        // alert('')
        this.route.navigate(['/loan']);

        }
        else{
          alert(detail.firstname+' did not applied for loan....');
        }
      });
      // if()
  }
  delete(detail:any){
      this.http.delete<any>("http://localhost:3000/users/"+detail.id).subscribe(()=>{
        alert('Deleted Successfully')
        this.ngOnInit();
      })
  }


}
