import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Heart } from '../shared/heart.model';

@Component({
  selector: 'app-tries',
  templateUrl: './tries.component.html',
  styleUrls: ['./tries.component.scss']
})
export class TriesComponent implements OnInit, OnChanges {

  @Input() tries = 0;
  heartsForTheUser: Heart[] = [
    new Heart(true), new Heart(true), new Heart(true)
  ]

  constructor() { }

  ngOnChanges(){
    if (this.tries != this.heartsForTheUser.length){
      let index = this.heartsForTheUser.length - this.tries;
      this.heartsForTheUser[index-1].isFull = false;
    }
  }

  ngOnInit() {
  }

}