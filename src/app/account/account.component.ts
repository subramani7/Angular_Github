import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../validate.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
    update:FormGroup

   name:any=sessionStorage.getItem('firstname');
  constructor(private service:ValidateService,private form:FormBuilder,private http:HttpClient,private route:Router) {
    this.update=this.form.group({
      firstname:[,Validators.required],
      phoneno:[,Validators.required],
      email:[,Validators.required],
      password:[,Validators.required],
      confirm:[,Validators.required],
    address:[,Validators.required],
    })
  }
  registerDetails:any='';
  idvalue:any;
  firstname:any;
  email:any;
  phoneno:any;
  password:any;
  confirm:any;
  address:any;
  ngOnInit() {
    this.service.getData().subscribe((data)=>{
     this.registerDetails=data;

     for(var i=0;i<this.registerDetails.length;i++){
      if(this.name==this.registerDetails[i].firstname){
         console.log(this.name);
         this.idvalue=i;
         console.log(this.idvalue);

      }
     }
     this.firstname=this.registerDetails[this.idvalue].firstname;
     this.email=this.registerDetails[this.idvalue].email;
     this.phoneno=this.registerDetails[this.idvalue].Phoneno;
     this.password=this.registerDetails[this.idvalue].password;
     this.address=this.registerDetails[this.idvalue].address;
     this.confirm=this.registerDetails[this.idvalue].confirm;
     this.idvalue++;
     this.update.controls['firstname'].setValue(this.firstname);
     this.update.controls['email'].setValue(this.email);
     this.update.controls['phoneno'].setValue(this.phoneno);
     this.update.controls['password'].setValue(this.password);
     this.update.controls['confirm'].setValue(this.confirm);
     this.update.controls['address'].setValue(this.address);
     this.update.markAsPristine();
    }
    )

  }
  updateProfile(data:any){
    // alert(this.idvalue);

   if(!this.update.pristine){
    let updatedData={
      firstname: data.firstname,
      Phoneno: data.phoneno ,
      email:  data.email,
      password: data.password,
      confirm:data.confirm,
      address: data.address,

    }
    this.service.updateuserInfo(updatedData,this.idvalue).subscribe((Response)=>
    {
      alert("updated successfull");
      // this.http.get(`http://localhost:3000/users/${this.idvalue}`).subscribe((Response)=>{
      //   console.log(Response.firstname);
      //   // this.update.controls['firstname'].setValue(Response[0].firstname);
      //   // this.update.controls['email'].setValue(Response.email);
      //   // this.update.controls['phoneno'].setValue(Response.phoneno);
      //   // this.update.controls['password'].setValue(Response.password);
      //   // // this.update.controls['confirm'].setValue(Response.confirm);
      //   // this.update.controls['address'].setValue(Response.address);
      // }
      // )
      this.route.navigate(['/login']);
    })

   }
   else{
    alert("Data is not modified");
   }

  }
  profileUpdate(){
    const profile:any= document.querySelector(".update");
    profile.showModal();
  }
  closeProfile(){
    const close:any =document.querySelector(".update");
    close.close();
  }
}
// "firstname": "mani",
//       "Phoneno": "8610209535",
//       "email": "crazysanty007@gmail.com",
//       "password": "Mani@123",
//       "confirm": "Mani@123",
//       "address": "ksr college of engineering",
//       "id": 9
