import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Phrase} from '../shared/phrase.model';
import { PHRASES } from './phrases-mock';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  phrases: Array<Phrase> = PHRASES;
  instruction = 'Traduza a frase:';
  userResponse = '';
  round = 0;
  roundPhrase: Phrase;
  progress = 0;
  progressIncrement = 0;
  tries = 3;
  @Output() endGame = new EventEmitter();

  constructor() {
    this.updateRound();
    this.progressIncrement = 100 / this.phrases.length;
  }

  ngOnInit() {
  }

  updateResponse(response: Event) {
    this.userResponse = (<HTMLInputElement>response.target).value;
  }

  avaliateResponse() {

    if (this.roundPhrase.portuguesePhrase == this.userResponse){

      this.progress += this.progressIncrement;
      this.round++;

      if (this.round === this.phrases.length){
        this.endGame.emit('win');
      }
      
      this.updateRound();      

    } else {
      this.tries--;
      if (this.tries === -1){
        this.endGame.emit('lose');
      }
    }
    
  }

  updateRound() {
    this.roundPhrase = this.phrases[this.round];
    this.userResponse = '';
  }

}