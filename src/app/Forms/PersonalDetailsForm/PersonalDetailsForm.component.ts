import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ValidateService } from 'src/app/validate.service';

@Component({
  selector: 'app-PersonalDetailsForm',
  templateUrl: './PersonalDetailsForm.component.html',
  styleUrls: ['./PersonalDetailsForm.component.css']
})
export class PersonalDetailsFormComponent implements OnInit {

  constructor(

    private fb: FormBuilder,
    private Reg: ValidateService,
    private route: Router
  ) {}
  personalForms = this.fb.group(
    {
      firstname:[, [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      lastname:[, [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      dob:[, [Validators.required,]],
      age:[, [Validators.required,]],
      fathername:[, [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      mothername:[, [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      fatheroccupation:[, [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      motheroccupation:[, [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      ctc:[, [Validators.required,Validators.pattern('^[6-9]{1}[0-9]{9}$')]],
      sex:[, [Validators.required,]],
      bloodgrp:[, [Validators.required,]],
      Phoneno:[, [Validators.required,Validators.pattern('^[6-9]{1}[0-9]{9}$')]],
      address:[, [Validators.required,]],

  }
  );
  personalSubmit() {
    this.Reg.addPersonalInfo(this.personalForms.value).subscribe((data) => {
      alert('Enter your correct studies details....')
      this.route.navigate(['/studydetails']);
    });
  }
// next(){
//   alert('Enter your correct studies details....')
//   this.route.navigate(['/studydetails']);
// }

    ngOnInit() {
    }

  backPage()
  {
     this.route.navigate(['/service']);
  }
  }



