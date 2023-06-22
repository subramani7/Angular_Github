import { HttpClient } from '@angular/common/http';
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
  getDetails:any='';
  constructor(
    private fb: FormBuilder,
    private Reg: ValidateService,
    private route: Router,
    private http:HttpClient,
  ) { }
  accountform=this.fb.group({
    bankname: [, [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
    acccountnum: [, [Validators.required,Validators.pattern('^[0-9]*$')]],
    micr: [, [Validators.required]],
    Amount: [, [Validators.required, Validators.pattern('^[0-9]*$')]],
    branchname: [, [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
    ifsc: [, [Validators.required]],
    phone: [, [Validators.required,]],
    original:[, [Validators.required,]],

  });
  submitForm(){
    this.Reg.addaccFormInfo(this.accountform.value).subscribe((data) => {
      alert('Apply successfully')
      this.route.navigate(['/appiled']);
    });
  }


  ngOnInit() {
    const a=sessionStorage.getItem("login");
  if(a){
    this.getDetails=JSON.parse(a);
  }
  }
  applyLoan(){
    var body={
      'registerstatus':'success'
    }
   this.http.patch<any>('http://localhost:3000/users/'+this.getDetails.id,body).subscribe((data)=>{
  // alert('fetch')
   })
   var validId={
      'validID':this.getDetails.id,
      'registerstatus':'success'

   }
  this.http.post<any>('http://localhost:3000/ValidId',validId).subscribe((data)=>{
    // alert('Applied successfully');
  })
  }
}
