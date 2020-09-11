import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'instagram';

  ngOnInit(): void {
    var firebaseConfig = {
      apiKey: "AIzaSyDDbBZdCxPVgmFESCJaHLbyzaZ39RZNH6U",
      authDomain: "sks-instagram-clone.firebaseapp.com",
      databaseURL: "https://sks-instagram-clone.firebaseio.com",
      projectId: "sks-instagram-clone",
      storageBucket: "sks-instagram-clone.appspot.com",
      messagingSenderId: "131113070598",
      appId: "1:131113070598:web:848ee41ac17f0378b7d387"
    };
    firebase.initializeApp(firebaseConfig);
  }

}