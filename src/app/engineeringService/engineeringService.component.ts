import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-engineeringService',
  templateUrl: './engineeringService.component.html',
  styleUrls: ['./engineeringService.component.css']
})
export class EngineeringServiceComponent implements OnInit {

  getDetails:any;
  constructor( private route:Router,private http:HttpClient) { }

  ngOnInit() {
    const a=sessionStorage.getItem("login");
    if(a){
      this.getDetails=JSON.parse(a);
    }
  }
  next(){
    this.http.get<any>('http://localhost:3000/ValidId/').subscribe(data=>{
      const id=data.find((c:any)=>{
        return c.validID===this.getDetails.id;
      })
      if(id){
        this.sample(id);
      }
      else{
        alert('Enter your correct personal details....')
        this.route.navigate(['/personaldetails']);
      }
    })
  }
  sample(id:any){
    if(id.registerstatus=="success")
    {
      // alert('Your already apply for loan..');
     this.route.navigate(['/appiledDetail']);
    }

  }
}
