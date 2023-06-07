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
      sslcregNo: [, [Validators.required, Validators.pattern('/^\d+$/')]],
      hscregNo: [, [Validators.required, Validators.pattern('/^\d+$/')]],
      collegeregNo: [, [Validators.required, Validators.pattern('/^\d+$/')]],
      SSLCschoolName: [, [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      HSCschoolName: [, [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      SSLCMark: [, [Validators.required, Validators.pattern('/^\d+$/')]],
      HSCMark: [, [Validators.required, Validators.pattern('/^\d+$/')]],
      SSLCyearOfPassing: [, [Validators.required, Validators.pattern('/^\d+$/')]],
      HSCyearOfPassing: [, [Validators.required, Validators.pattern('/^\d+$/')]],
      CLGyearOfPassing: [, [Validators.required, Validators.pattern('/^\d+$/')]],
      SSLCmarksheetNo: [, [Validators.required, Validators.pattern('/^\d+$/')]],
      HSCmarksheetNo: [, [Validators.required, Validators.pattern('/^\d+$/')]],
      SSLCDistrict: [, [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      HSCDistrict: [, [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      CLGDistrict: [, [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],

      SSLCPercentage: [, [Validators.required,Validators.pattern('/^\d+$/')]],
      HSCPercentage: [, [Validators.required,Validators.pattern('/^\d+$/')]],
      course: [, [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      clgName: [, [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      sem: [, [Validators.required,Validators.pattern('/^\d+$/')]],
      pincode: [, [Validators.required,Validators.pattern('/^\d+$/')]],
      deptName: [, [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      cgpa: [, [Validators.required, Validators.pattern('^100(\.0{0,2})? *%?$|^\d{1,2}(\.\d{1,2})? *%?$')]],
      currentYear: [, [Validators.required,Validators.pattern('/^\d+$/')]],
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
