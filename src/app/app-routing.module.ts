import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountDetailsComponent } from './accountDetails/accountDetails.component';
import { AdminComponent } from './admin/admin.component';
import { AgricultureServiceComponent } from './agricultureService/agricultureService.component';
import { ArtsServiceComponent } from './artsService/artsService.component';
// import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contactUs/contactUs.component';
// import { EngineerFormComponent } from './form/personalDetailForm.component';
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
import { AuthGuard } from './auth.guard';
import { AccountComponent } from './account/account.component';
import { PersonalDetailsFormComponent } from './Forms/PersonalDetailsForm/PersonalDetailsForm.component';
import { StudyDetailsFormComponent } from './Forms/StudyDetailsForm/StudyDetailsForm.component';
import { AccDetailsFormComponent } from './Forms/AccDetailsForm/AccDetailsForm.component';
import { LoanformdetailsComponent } from './loanformdetails/loanformdetails.component';
import { AppliedComponent } from './applied/applied.component';
import { AppliedDetailsComponent } from './appliedDetails/appliedDetails.component';
import { ProfileComponent } from './profile/profile.component';
import { UpdateProfileComponent } from './updateProfile/updateProfile.component';
import { LoanStatusComponent } from './loanStatus/loanStatus.component';
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
    canActivate:[AuthGuard],
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
    path:'register',
    component:RegisterComponent
  },
  {
    path:'service/engineer',
    component:EngineeringServiceComponent,
    canActivate:[AuthGuard],
  },
  {
    path:'service/arts',
    component:ArtsServiceComponent,
    canActivate:[AuthGuard],
  },
  {
    path:'service/medical',
    component:MedicalServiceComponent,
    canActivate:[AuthGuard],
  },
  {
    path:'service/agri',
    component:AgricultureServiceComponent,
    canActivate:[AuthGuard],
  },
  {
    path:'service/engineer/Eform',
   component:PersonalDetailsFormComponent,
  },
  {
   path:'studydetails',
   component:StudyDetailsFormComponent,
  },
  {
    path:'accountdetails',
    component:AccDetailsFormComponent,
   },
   {
    path:'personaldetails',
    component:PersonalDetailsFormComponent,
   },
   {
path:'appliedloanDetails',
component:LoanformdetailsComponent,
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
  {
    path:'myaccount',
    component:AccountComponent,
  },
  {
    path:'appiled',
    component:AppliedComponent,
  },
  {
    path:'appiledDetail',
    component:AppliedDetailsComponent,
  },
  {
    path:'profile',
    component:ProfileComponent,
  },
{
  path:'updateprofile',
  component:UpdateProfileComponent,
},
{
  path:'loanstatus',
  component:LoanStatusComponent,
}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
