import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ValidateService } from 'src/app/validate.service';

@Component({
  selector: 'app-AccDetailsForm',
  templateUrl: './AccDetailsForm.component.html',
  styleUrls: ['./AccDetailsForm.component.css']
})
export class AccDetailsFormComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private Reg: ValidateService,
    private route: Router
  ) { }
  accountform=this.fb.group({
    bankname: [, [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
    acccountnum: [, [Validators.required]],
    micr: [, [Validators.required]],
    Amount: [, [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
    branchname: [, [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
    ifsc: [, [Validators.required]],
    phone: [, [Validators.required,]],


  })
  ngOnInit() {
  }

}
