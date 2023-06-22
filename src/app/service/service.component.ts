import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  constructor() { }
   getDetails:any='';
  ngOnInit() {
    const a=sessionStorage.getItem("login");
  if(a){
    this.getDetails=JSON.parse(a);
  }
  }

}
