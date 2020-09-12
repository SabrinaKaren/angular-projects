import { DatabaseService } from './../../services/database.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-add-publication',
  templateUrl: './add-publication.component.html',
  styleUrls: ['./add-publication.component.scss']
})
export class AddPublicationComponent implements OnInit {

  form: FormGroup = new FormGroup({
    'title': new FormControl()
  });
  userEmail = '';
  image: any;

  constructor(private databaseService: DatabaseService) { }

  ngOnInit() {
    firebase.auth().onAuthStateChanged((user) => {
      this.userEmail = user.email;
    });
  }

  publish(){
    this.databaseService.publish({
      'email': this.userEmail,
      'title': this.form.value.title,
      'image': this.image
    });
  }

  prepareImageUpload(event: Event){
    this.image = (<HTMLInputElement>event.target).files[0];
  }

}