import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  gameIsInProgress = true;
  endType = '';
  
  endGame(endType: string){
    this.gameIsInProgress = false;
    this.endType = endType;
  }

  restartGame(){
    this.gameIsInProgress = true;
    this.endType = undefined;
  }

}