import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-cv',
  templateUrl: './view-cv.component.html',
  styleUrls: ['./view-cv.component.css']
})
export class ViewCvComponent implements OnInit {

  userId : number;
  userName : string;
  constructor(private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.userId = this.route.snapshot.params['id'];
    this.userName = this.route.snapshot.params['userName'];
  }

}
