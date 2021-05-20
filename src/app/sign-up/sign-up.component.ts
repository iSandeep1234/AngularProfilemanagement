import { Component, OnInit } from '@angular/core';
import { BasicAuthenticServiceService } from '../services/basic-authentic-service.service';
import { User } from '../user';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  userId : number;
  userName: string ;
  dateOfBirth : Date;
  datenew : Date;
  invalidLogin = false;
  user : User;
  message;
  file : File;

  constructor(private basicAuthenticationService : BasicAuthenticServiceService) { }

  ngOnInit(): void {
    //for issue of not getting request body through post method
     this.user = new User(1,"Avi",new Date(),this.file,"","","","","","");
  }

  signUpHandler(){
    this.basicAuthenticationService.createUser(this.userName, this.user).subscribe(
      response => {
        this.message= `Sign Up successfull!! Please Login with your user name: ${this.user.userName}`;
        console.log(response);
      }
    )
  }
}
