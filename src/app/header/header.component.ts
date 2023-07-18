import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  success=false;
  getDetails: any;

  constructor(public service:AuthService, private route:Router) {
    this.success=Boolean(sessionStorage.getItem("success"))||this.service.userlogin
  }
  logout(){
    this.service.userlogin=false;
    this.success=false;
    sessionStorage.clear();
    const del:any =document.querySelector('.drop');
    del.close();
    this.route.navigate(['/home']);
  }

  profile(){
    // const profile:any =document.querySelector('.drop');
    // profile.close();

  }
  drop(){
    const a:any=document.querySelector('.drop');
    a.showModal();
  }
  closedrop(){
    const del:any =document.querySelector('.drop');
    del.close();
  }
  ngOnInit() {
    const a=sessionStorage.getItem("login");
    if(a)
    {
      this.getDetails=JSON.parse(a);
    }
  }

}
