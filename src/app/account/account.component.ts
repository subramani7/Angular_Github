import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../validate.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  profileImagePath: string = '../assets/images/click.png';

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e: any) => {
      this.profileImagePath = e.target.result;
    };

    reader.readAsDataURL(file);
  }

   name:any=sessionStorage.getItem('firstname');
  constructor(private service:ValidateService) { }
  registerDetails:any='';
  idvalue:any;
  firstname:any;
  email:any;
  phoneno:any;
  password:any;
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
    }
    )
  }

}
