import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CarrierObjectiveComponent } from './carrier-objective/carrier-objective.component'
import { DatePipe } from '@angular/common';
import { LogoutComponent } from './logout/logout.component';
import { AdminComponent } from './admin/admin.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { CvListComponent } from './cv-list/cv-list.component';
import { ViewCvComponent } from './view-cv/view-cv.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    CarrierObjectiveComponent,
    LogoutComponent,
    AdminComponent,
    SignUpComponent,
    FileUploadComponent,
    CvListComponent,
    ViewCvComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
