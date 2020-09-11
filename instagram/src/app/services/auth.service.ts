import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  registerUser(user: User){

    return firebase
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password)
        .then((response: any) => {

          delete user.password;
          firebase
              .database()
              .ref(`user_detail/${btoa(user.email)}`)
              .set(user);

        })
        .catch((error: Error) => {
          return error;
        })

  }

  auth(email: string, password: string){

    return firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((response: any) => {

          firebase
              .auth()
              .currentUser
              .getIdToken()
              .then((idToken: string) => {
                localStorage.setItem('token', idToken);
                this.router.navigate(['/home']);
              })

        })
        .catch((error: Error) => {
          return error;
        })
        
  }

  logout(){
    firebase
        .auth()
        .signOut()
        .then(() => {
          localStorage.removeItem('token');
          this.router.navigate(['']);
        })
        .catch((error: Error) => console.log(error));
  }

}