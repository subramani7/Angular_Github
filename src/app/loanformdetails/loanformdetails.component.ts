import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../validate.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-loanformdetails',
  templateUrl: './loanformdetails.component.html',
  styleUrls: ['./loanformdetails.component.css']
})
export class LoanformdetailsComponent implements OnInit {
  getDetails: any;

  constructor(
    private service:ValidateService,
    private route:Router,
    private http:HttpClient,
    private fb:FormBuilder
  ) { }



  registerDetails:any;
  idvalue1:any;

////------------------------------------
detailOne:any='';
detailTwo:any='';
detailThree:any='';
details:any;

ngOnInit(){
  const a=sessionStorage.getItem("login");
  if(a)
  {
    this.getDetails=JSON.parse(a);
  }
  // alert(this.getDetails.firstname);

    this.http.get<any>("http://localhost:3000/personalInfo").subscribe(value=>{
      const personal1=value.find((a:any)=>{
        return a.firstname===this.getDetails.firstname
      });
      if(personal1){
        this.detailOne=personal1
        this.http.get<any>("http://localhost:3000/studyInfo/"+personal1.id).subscribe(value1=>{
          this.detailTwo=value1
        });
        this.http.get<any>("http://localhost:3000/accFormInfo/"+personal1.id).subscribe(value2=>{
          this.detailThree=value2
        });
      }
    });





//    this.http.get<any>('http://localhost:3000/personalInfo').subscribe((data1)=>{

//    if(personal){
//     this.detailOne=personal;
//     console.log(this.detailOne);
//     this.http.get<any>('http://localhost:3000/studyInfo/'+personal.id).subscribe((data2)=>{
//     this.detailTwo=data2;
//   })
//   this.http.get<any>('http://localhost:3000/accFormInfo/'+personal.id).subscribe((data3)=>{
//     this.detailThree=data3;
// })
//    }
//    })





// this.service.getPersonalInfo().subscribe((data)=>{
// this.personaldetailsform=data;
// this.Firstname=this.personaldetailsform[this.idvalue1].firstname;
// this.Lastname=this.personaldetailsform[this.idvalue1].lastname;
// this.dob=this.personaldetailsform[this.idvalue1].dob;
// this.age=this.personaldetailsform[this.idvalue1].age;
// this.fName=this.personaldetailsform[this.idvalue1].fathername;
// this.fOccupation=this.personaldetailsform[this.idvalue1].fatheroccupation;
// this.mName=this.personaldetailsform[this.idvalue1].mothername;
// this.mOccupation=this.personaldetailsform[this.idvalue1].motheroccupation;
// this.ctc=this.personaldetailsform[this.idvalue1].ctc;
// this.sex=this.personaldetailsform[this.idvalue1].sex;
// this.blood=this.personaldetailsform[this.idvalue1].bloodgrp;
// this.phonenum=this.personaldetailsform[this.idvalue1].Phoneno;
// this.address=this.personaldetailsform[this.idvalue1].address;
// });

// this.service.getStudyInfo().subscribe((data)=>{
//   this.studyDetailsForm=data;

//   this.sslcRegno=this.studyDetailsForm[this.idvalue1].sslcregNo;
//   this.sslcMarkNO=this.studyDetailsForm[this.idvalue1].SSLCmarksheetNo;
//   this.sslcSCL=this.studyDetailsForm[this.idvalue1].SSLCschoolName;
//   this.sslcDistrict=this.studyDetailsForm[this.idvalue1].SSLCDistrict;
//   this.sslcMark=this.studyDetailsForm[this.idvalue1].SSLCMark;
//   this.sslcPercentage=this.studyDetailsForm[this.idvalue1].SSLCPercentage;
//   this.sslcYOP=this.studyDetailsForm[this.idvalue1].SSLCyearOfPassing;
//   //
//   this.hscRegno=this.studyDetailsForm[this.idvalue1].hscregNo;
//   this.hscMarkNO=this.studyDetailsForm[this.idvalue1].HSCmarksheetNo;
//   this.hscSCL=this.studyDetailsForm[this.idvalue1].HSCschoolName;
//   this.hscDistrict=this.studyDetailsForm[this.idvalue1].HSCDistrict;
//   this.hscMark=this.studyDetailsForm[this.idvalue1].HSCMark;
//   this.hscPercentage=this.studyDetailsForm[this.idvalue1].HSCPercentage;
//   this.hscYOP=this.studyDetailsForm[this.idvalue1].HSCyearOfPassing;
//   //
// this.course=this.studyDetailsForm[this.idvalue1].course;
// this.clgRegno=this.studyDetailsForm[this.idvalue1].collegeregNo;
// this.deptName=this.studyDetailsForm[this.idvalue1].deptName;
// this.clgName=this.studyDetailsForm[this.idvalue1].clgName;
// this.ccpa=this.studyDetailsForm[this.idvalue1].cgpa;
// this.currentSem=this.studyDetailsForm[this.idvalue1].sem;
// this.currentYear=this.studyDetailsForm[this.idvalue1].currentYear;
// this.clgYOP=this.studyDetailsForm[this.idvalue1].CLGyearOfPassing;
// this.backlogs=this.studyDetailsForm[this.idvalue1].backlogs;
// this.pincode=this.studyDetailsForm[this.idvalue1].pincode;
// this.clgDistrict=this.studyDetailsForm[this.idvalue1].CLGDistrict;
// this.clgAddress=this.studyDetailsForm[this.idvalue1].address;
// });
// this.service.getaccFormInfo().subscribe((data)=>{
// this.accDetailsForm=data;
// this.Bankname=this.accDetailsForm[this.idvalue1].bankname;
// this.Branchname=this.accDetailsForm[this.idvalue1].branchname;
// this.Accountno=this.accDetailsForm[this.idvalue1].acccountnum;
// this.MICRcode=this.accDetailsForm[this.idvalue1].micr;
// this.Amountreguired=this.accDetailsForm[this.idvalue1].Amount;
// this.IFSCcode=this.accDetailsForm[this.idvalue1].ifsc;
// this.Phoneno=this.accDetailsForm[this.idvalue1].phone;
// });
  }
  updateDetailForm1=this.fb.group({
    firstname:[,],
    lastname:[,]
  })
fName:any=""
  detailOneUpdate(){

    // this.http.patch<any>("http://localhost:3000/per  sonalInfo")
  }
}


// "bankname": null,
// "acccountnum": null,
// "micr": null,
// "Amount": null,
// "branchname": null,
// "ifsc": null,
// "phone": null,
// "id": 1
