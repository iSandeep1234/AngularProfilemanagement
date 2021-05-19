import { Component, OnInit } from '@angular/core';
import { HardocedAuthenticationService } from '../services/hardoced-authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  isLoggedIn : boolean = false;
  constructor(public hardcodeAuthenticationService : HardocedAuthenticationService) { }

  ngOnInit(): void {
    this.isLoggedIn = this.hardcodeAuthenticationService.isUserLoggedIn();
    console.log(this.isLoggedIn);
  }

}
