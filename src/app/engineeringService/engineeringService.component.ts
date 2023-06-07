import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-engineeringService',
  templateUrl: './engineeringService.component.html',
  styleUrls: ['./engineeringService.component.css']
})
export class EngineeringServiceComponent implements OnInit {


  constructor( private route:Router) { }

  ngOnInit() {
  }
  next(){
    alert('Enter your correct personal details....')
    this.route.navigate(['/personaldetails']);
  }
}
