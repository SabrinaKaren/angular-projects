import { ProgressService } from './progress.service';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private progressService: ProgressService) { }

  publish(publication: any){

    this.progressService.state = {bytesTransferred: 0, totalBytes: 0};

    firebase
        .database()
        .ref(`publications/${btoa(publication.email)}`)
        .push({ title: publication.title })
        .then((response: any) => {

            let imageName = response.key;
            firebase
                .storage()
                .ref()
                .child(`images/${imageName}`)
                .put(publication.image)
                .on(firebase.storage.TaskEvent.STATE_CHANGED,
                  (snapshot: any) => {
                    this.progressService.status = "andamento";
                    this.progressService.state = snapshot;
                  },
                  (error) => {
                    this.progressService.status = "erro";
                  },
                  () => {
                    this.progressService.status = "concluido";
                  }
                )

        })

  }

  getPublications(userEmail: string){

    return new Promise((resolve, reject) => {
      
      firebase
          .database()
          .ref(`publications/${btoa(userEmail)}`)
          .orderByKey()
          .once("value")
          .then((snapshot: any) => {

            let publications: Array<any> = [];

            snapshot.forEach((childSnapshot: any) => {
              let publication = childSnapshot.val()
              publication.key = childSnapshot.key
              publications.push(publication)
            })

            return publications.reverse()

          })
          .then((publications: any) => {

            publications.forEach((publication) => {
              firebase
                  .storage()
                  .ref()
                  .child(`images/${publication.key}`)
                  .getDownloadURL()
                  .then((url: string) => {
                    publication.imageUrl = url;
                      firebase
                          .database()
                          .ref(`user_detail/${btoa(userEmail)}`)
                          .once("value")
                          .then((snapshot: any) => {
                            publication.userName = snapshot.val().userName;
                            publications.push(publication);
                          })
                  })
            })

            resolve(publications);

          })
    })

  }

}