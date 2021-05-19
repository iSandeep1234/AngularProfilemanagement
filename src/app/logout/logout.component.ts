import { Component, OnInit } from '@angular/core';
import { HardocedAuthenticationService } from '../services/hardoced-authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private hardCodedAuthentication : HardocedAuthenticationService) { }

  ngOnInit(): void {
    this.hardCodedAuthentication.logout();
  }

}
