import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicAuthenticServiceService } from '../services/basic-authentic-service.service';
import { User } from '../user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName: string;
  dateOfBirth : Date;
  datenew : Date;
  invalidLogin = false;
  newDate : any;
  errorMessage = "No user found";
  userDetails : any;


  constructor(private basicAuthenticationService : BasicAuthenticServiceService,
              private router : Router,
              public datePipe : DatePipe) 
              { }

  ngOnInit(): void {
    
  }
  dateToIso(date : Date){
    this.newDate = new Date(date).toISOString();
    console.log("The Date is "+(this.newDate));
    return this.newDate;
  }

  basicLoginHandler(){
    this.basicAuthenticationService.getId(this.userName,this.dateToIso(this.dateOfBirth)).subscribe(
      response => {
        
        this.userDetails = response;
        sessionStorage.setItem("UserId",this.userDetails.userId);
        this.router.navigate(['carrierObjective', this.userName, sessionStorage.getItem('UserId')]);
        this.invalidLogin = false;
      },
      error => {
        console.log(error);
        this.invalidLogin = true;
      }
    );
  }
}
