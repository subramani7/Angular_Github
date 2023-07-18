import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  getDetails: any;

  constructor() { }

  ngOnInit() {
    const a=sessionStorage.getItem("login");
    if(a)
    {
      this.getDetails=JSON.parse(a);
    }
  }

}
