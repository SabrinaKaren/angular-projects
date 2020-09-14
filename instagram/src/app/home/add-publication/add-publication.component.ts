import { ProgressService } from './../../services/progress.service';
import { DatabaseService } from './../../services/database.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { Observable, interval, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

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
  publicationProgress: string = 'pendente';
  uploadPercentage: number;

  constructor(
    private databaseService: DatabaseService,
    private progressService: ProgressService
  ) { }

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

    let uploadTracking = interval(1500);
    let continueSubject = new Subject();
    continueSubject.next(true);

    uploadTracking.pipe(
      takeUntil(continueSubject)
    ).subscribe(() => {
      console.log(this.progressService.status);
      console.log(this.progressService.state);
      if (this.progressService.status === 'concluido'){
        continueSubject.next(false);
      }
    })

  }

  prepareImageUpload(event: Event){
    this.image = (<HTMLInputElement>event.target).files[0];
  }

}