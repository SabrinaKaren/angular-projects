import { ProgressService } from './progress.service';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private progressService: ProgressService) { }

  publish(publication: any){

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

}