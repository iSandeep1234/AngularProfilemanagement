import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { CarrierObjectiveComponent } from './carrier-objective/carrier-objective.component';
import { CvListComponent } from './cv-list/cv-list.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ViewCvComponent } from './view-cv/view-cv.component';

const routes: Routes = [
  {path : '' , component : LoginComponent},
  {path : 'login' , component : LoginComponent},
  {path : 'admin' , component : AdminComponent},
  {path : 'signUp' , component : SignUpComponent},
  {path : 'carrierObjective/:userName/:userId', component : CarrierObjectiveComponent},
  {path : 'fileUpload' , component : FileUploadComponent},
  {path : 'logout', component : LogoutComponent},
  {path : 'cvList', component : CvListComponent},
  {path : 'viewCv/:id/:userName', component : ViewCvComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
