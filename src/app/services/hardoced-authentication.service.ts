import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardocedAuthenticationService {
  

  constructor() { }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('UserId');
    return !(user == null);
  }

  logout() {
    sessionStorage.clear();
  }
}
