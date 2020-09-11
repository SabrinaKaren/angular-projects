import { User } from './../../models/user.model';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  registerUser(user: User){
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        .then((response: any) => {
          console.log(response);
        })
        .catch((error: Error) => {
          console.log(error);
        })
  }

}