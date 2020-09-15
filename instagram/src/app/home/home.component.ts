import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('publications') publications: any;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  logout(){
    this.authService.logout();
  }

  updateTimeLine(){
    this.publications.updateTimeLine();
  }

}