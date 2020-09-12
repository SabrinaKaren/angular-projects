import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor() { }

  publish(publication: any){

    let imageName = Date.now();

    firebase
        .storage()
        .ref(`images/${imageName}`)
        .put(publication.image);

    // firebase
    //     .database()
    //     .ref(`publications/${btoa(publication.email)}`)
    //     .push({ title: publication.title });

  }

}