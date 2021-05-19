import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Admin } from '../admin/admin.component';
import { User } from '../user';


@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticServiceService {
  
  
  dateOfNew : any;
  constructor(private http : HttpClient,
              public datePipe : DatePipe) { }

   //during login           
  getId(userName: string, dateOfBirth: Date) {
    return this.http.get(`http://localhost:8080/users/nameanddob/${userName}&${dateOfBirth}`);
  }
  
  //during carrieobjectiveopening
  getDetails(userName: string, userId: number) {
    return this.http.get<User>(`http://localhost:8080/users/nameanddob/${userName}/${userId}`);
  }

  //during carrieobjectiveopening
  createUser(userName: string, userDetails : User) {
    return this.http.post(`http://localhost:8080/save`, userDetails);
  }

  updateUser(userId: number, userDetails : User) {
    return this.http.put(`http://localhost:8080/users/${userId}`, userDetails)
  }

  updateUserProfilePic(userId: number, fromData : FormData) {
    return this.http.put<any>(`http://localhost:8080/profilePic/${userId}`, fromData,{observe : 'response', responseType: 'json'})
  }

  //during login of Admin          
  loginAdmin(adminName : string,adminPassword : string) {
    return this.http.get(`http://localhost:8080/loginAdmin/${adminName}&${adminPassword}`);
  }

  //sign up of Admin          
  signUpAdmin(adminDetails : Admin) {
    
    return this.http.post(`http://localhost:8080/saveAdmin`,adminDetails);
  }

  getAllUserCv(){
    return this.http.get<User[]>(`http://localhost:8080/users`);
  }
}
