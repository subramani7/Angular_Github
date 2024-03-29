import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
// import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contactUs/contactUs.component';
import { ServiceComponent } from './service/service.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './Register/Register.component';
import { EngineeringServiceComponent } from './engineeringService/engineeringService.component';
// import { SideNavComponent } from './sideNav/sideNav.component';
import { ArtsServiceComponent } from './artsService/artsService.component';
import { MedicalServiceComponent } from './medicalService/medicalService.component';
import { AgricultureServiceComponent } from './agricultureService/agricultureService.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { UsersComponent } from './users/users.component';
import { AdminHeaderComponent } from './adminHeader/adminHeader.component';
import { AdminNavComponent } from './adminNav/adminNav.component';
import { PersonalDetailsComponent } from './personalDetails/personalDetails.component';
import { StudyDetailsComponent } from './studyDetails/studyDetails.component';
import { AccountDetailsComponent } from './accountDetails/accountDetails.component';
import { LoanDetailsComponent } from './loanDetails/loanDetails.component';
import { AccountComponent } from './account/account.component';
// import { ForgetComponent } from '.e:/ANGULAR/angularVersiontwo/src/forget/forget.component';
import { ForgetComponent } from './forget/forget.component';
import { AccDetailsFormComponent } from './Forms/AccDetailsForm/AccDetailsForm.component';
import { DocumentFormComponent } from './Forms/DocumentForm/DocumentForm.component';
import { PersonalDetailsFormComponent } from './Forms/PersonalDetailsForm/PersonalDetailsForm.component';
import { StudyDetailsFormComponent } from './Forms/StudyDetailsForm/StudyDetailsForm.component';
import { LoanformdetailsComponent } from './loanformdetails/loanformdetails.component';
import { AppliedComponent } from './applied/applied.component';
import { AppliedDetailsComponent } from './appliedDetails/appliedDetails.component';
import { ProfileComponent } from './profile/profile.component';
import { UpdateProfileComponent } from './updateProfile/updateProfile.component';
import { LoanStatusComponent } from './loanStatus/loanStatus.component';
import { AuthGuard } from './auth.guard';
@NgModule({
  declarations: [
    AppComponent,
      HomeComponent,
      // AboutComponent,
      ContactUsComponent,
      ServiceComponent,
      LoginComponent,
      RegisterComponent,
      EngineeringServiceComponent,
      ArtsServiceComponent,
      MedicalServiceComponent,
      AgricultureServiceComponent,
      PersonalDetailsComponent,
      AdminComponent,
      HeaderComponent,
      FooterComponent,
      SearchComponent,
      UsersComponent,
      AdminHeaderComponent,
      AdminNavComponent,
      PersonalDetailsComponent,
      StudyDetailsComponent,
      AccountDetailsComponent,
      LoanDetailsComponent,
      AccountComponent,
      // ForgetComponent
      ForgetComponent,
      AccDetailsFormComponent,
      DocumentFormComponent,
      PersonalDetailsFormComponent,
      StudyDetailsFormComponent,
      LoanformdetailsComponent,
      AppliedComponent,
      AppliedDetailsComponent,
      ProfileComponent,
      UpdateProfileComponent,
      LoanStatusComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    // Swiper,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
