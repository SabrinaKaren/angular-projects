import { DatabaseService } from './../../services/database.service';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss']
})
export class PublicationsComponent implements OnInit {

  userEmail = '';
  publications;

  constructor(private databaseService: DatabaseService) { }

  ngOnInit(): void {
    firebase.auth().onAuthStateChanged((user) => {
      this.userEmail = user.email;
      this.updateTimeLine();
    })
  }

  updateTimeLine(){

    this.databaseService.getPublications(this.userEmail)
        .then((publications: any) => {
          this.publications = publications;
        })

  }

}