import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BasicAuthenticServiceService } from '../services/basic-authentic-service.service';
export class Admin{
  adminId : number;
  adminName : string;
  adminPassword: string;
  constructor(adminId: number, adminName : string, adminPassword : string){}
}
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  invalidLogin : boolean = false;
  adminName : string;
  adminPassword : string;
  admin : Admin;
  //isLoggedIn : boolean = false;
  errorMessage : string ="Invalid Credential";
  constructor(private basicAuthenticService : BasicAuthenticServiceService,
              private router : Router) { }

  ngOnInit(): void {
  }

  adminLoginHandler(){
    //console.log("hi");
    this.basicAuthenticService.loginAdmin(this.adminName, this.adminPassword).subscribe(
      response => {
        console.log(response);
        this.invalidLogin =false;
        alert("Login Succesfull")
        sessionStorage.setItem('adminName',this.adminName);
        //this.isLoggedIn = true;
        this.router.navigate(['cvList']);
      },
      error =>{
        this.invalidLogin =true;
      })

  }
}
