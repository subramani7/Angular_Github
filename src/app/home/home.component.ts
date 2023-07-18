import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  popup: boolean = false;
  ngOnInit() {
  }
  constructor() {
    this.time();
  }

  hours: string = '';
  minutes: string = '';
  seconds: string = '';
  months: String = '';
  years: String = '';
  todayDate: string = '';
  ampm: String = '';

  time() {
    setInterval(() => {
      var date = new Date();
      var hour = date.getHours();
      var minute = date.getMinutes();
      var second = date.getSeconds();
      var year = date.getFullYear();
      var today = date.getDate();
      var month = date.getMonth() + 1;
      var AP = '';
      if (hour >= 12) {
        AP = 'pm';
      }
      else {
        AP = 'am';
      }
      if (hour > 12) {
        hour = hour - 12;
      }

      this.hours = '' + hour + '';
      this.minutes = '' + minute + '';
      this.seconds = '' + second + '';
      this.months = '' + month + '';
      this.years = '' + year + '';
      this.ampm = '' + AP + '';
      this.todayDate = '' + today + '';

      this.openpopup();

    }, 1000);
  }

  openpopup() {
    if (this.hours == '2' && (this.minutes >= '12'  && this.seconds <='02') && this.years == '2023' && this.months == '6' && this.todayDate == '26') {
      this.popup = true;
    }
    if (this.hours == '2' && this.minutes >= '40' && this.years == '2023' && this.months == '6' && this.todayDate == '26') {
      this.popup = false;
    }
  }
  closepopup() {
    this.popup = false;
  }
}
