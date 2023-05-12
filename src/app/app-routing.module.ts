import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountDetailsComponent } from './accountDetails/accountDetails.component';
import { AdminComponent } from './admin/admin.component';
import { AgricultureServiceComponent } from './agricultureService/agricultureService.component';
import { ArtsServiceComponent } from './artsService/artsService.component';
// import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contactUs/contactUs.component';
import { EngineerFormComponent } from './form/EngineerForm.component';
import { EngineeringServiceComponent } from './engineeringService/engineeringService.component';
import { HomeComponent } from './home/home.component';
import { LoanDetailsComponent } from './loanDetails/loanDetails.component';
import { LoginComponent } from './login/login.component';
import { MedicalServiceComponent } from './medicalService/medicalService.component';
import { PersonalDetailsComponent } from './personalDetails/personalDetails.component';
import { RegisterComponent } from './Register/Register.component';
import { ServiceComponent } from './service/service.component';
import { StudyDetailsComponent } from './studyDetails/studyDetails.component';
import { UsersComponent } from './users/users.component';
// import { StudyDetailsFormComponent } from './form/studyDetailsForm/studyDetailsForm.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
  },
  {
    path:'home',
    component:HomeComponent,
  },
  {
    path:'service',
    component:ServiceComponent,
  },

  {
    path:'contactUs',
    component:ContactUsComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'login/register',
    component:RegisterComponent
  },
  {
    path:'service/engineer',
    component:EngineeringServiceComponent,
  },
  {
    path:'service/arts',
    component:ArtsServiceComponent,
  },
  {
    path:'service/medical',
    component:MedicalServiceComponent,
  },
  {
    path:'service/agri',
    component:AgricultureServiceComponent,
  },
  {
    path:'service/engineer/Eform',
    component:EngineerFormComponent,
  },
  {
    path:'admin',
    component:AdminComponent,
  },
  {
   path:'users',
   component:UsersComponent,
  },
  {
   path:'personal',
  component:PersonalDetailsComponent,
  },
  {
    path:'study',
    component:StudyDetailsComponent,
  },
  {
    path:'account',
    component:AccountDetailsComponent
  },
  {
    path:'loan',
    component:LoanDetailsComponent,
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }