import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Admin } from '../admin/admin.component';
import { BasicAuthenticServiceService } from '../services/basic-authentic-service.service';
import { User } from '../user';

@Component({
  selector: 'app-cv-list',
  templateUrl: './cv-list.component.html',
  styleUrls: ['./cv-list.component.css']
})
export class CvListComponent implements OnInit {

  admin : Admin;
  userList : User[];
  constructor(private basicAuthentication : BasicAuthenticServiceService,
              private router : Router) { }

  ngOnInit(): void {
    this.fetchAllCv();
  }
  //fetching and showing all cv to the admin
  fetchAllCv(){
    this.basicAuthentication.getAllUserCv().subscribe(
      response => {
        this.userList = response;
      }
    )
  }


  viewCv(id : number, userName : string){
    this.router.navigate(['viewCv',id,userName]);
  }
}
