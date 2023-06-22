import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ValidateService } from 'src/app/validate.service';

@Component({
  selector: 'app-StudyDetailsForm',
  templateUrl: './StudyDetailsForm.component.html',
  styleUrls: ['./StudyDetailsForm.component.css']
})
export class StudyDetailsFormComponent implements OnInit {

  // studyForm: FormGroup;
  // hscForm: FormGroup;


  constructor(

    private fb: FormBuilder,
    private Reg: ValidateService,
    private route: Router
  ) {}
    studyForm = this.fb.group({
      sslcregNo: [, [Validators.required, Validators.pattern('^[0-9]*$')]],
      hscregNo: [, [Validators.required, Validators.pattern('^[0-9]*$')]],
      collegeregNo: [, [Validators.required, Validators.pattern('^[0-9]*$')]],
      SSLCschoolName: [, [Validators.required,]],
      HSCschoolName: [, [Validators.required,]],
      SSLCMark: [, [Validators.required, Validators.pattern('^[0-9]*$')]],
      HSCMark: [, [Validators.required, Validators.pattern('^[0-9]*$')]],
      SSLCyearOfPassing: [, [Validators.required, Validators.pattern('^[0-9]*$')]],
      HSCyearOfPassing: [, [Validators.required, Validators.pattern('^[0-9]*$')]],
      CLGyearOfPassing: [, [Validators.required, Validators.pattern('^[0-9]*$')]],
      SSLCmarksheetNo: [, [Validators.required, Validators.pattern('^[0-9]*$')]],
      HSCmarksheetNo: [, [Validators.required, Validators.pattern('^[0-9]*$')]],
      SSLCDistrict: [, [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      HSCDistrict: [, [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      CLGDistrict: [, [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      SSLCPercentage: [, [Validators.required,Validators.pattern('^[0-9]*$')]],
      HSCPercentage: [, [Validators.required,Validators.pattern('^[0-9]*$')]],
      course: [, [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      clgName: [, [Validators.required,]],
      sem: [, [Validators.required,Validators.pattern('^[0-9]*$')]],
      pincode: [, [Validators.required,Validators.pattern('^[0-9]*$')]],
      deptName: [, [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      cgpa: [, [Validators.required, ]],
      currentYear: [, [Validators.required,Validators.pattern('^[0-9]*$')]],
      backlogs: [, [Validators.required,]],
      address: [, [Validators.required,]],

    });
    submitForm(){
      this.Reg.addStudyInfo(this.studyForm.value).subscribe((data) => {
        alert('Enter your correct account details....')
        this.route.navigate(['/accountdetails']);
      });
    }
    Previous(){
      this.route.navigate(['/personaldetails']);
    }
    // next(){
    //   alert('Enter your correct account details....')
    //   this.route.navigate(['/accountdetails']);
    // }
  ngOnInit() {
  }

}
