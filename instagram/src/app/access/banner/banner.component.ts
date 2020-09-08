import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  animations: [
    trigger('banner', [
      state('hidden', style({
        opacity: 0
      })),
      state('visible', style({
        opacity: 1
      })),
      transition('hidden <=> visible', animate('1s ease-in'))
    ])
  ]
})
export class BannerComponent implements OnInit {

  elementState = 'hidden';

  constructor() { }

  ngOnInit(): void {
  }

  changeOfState(){
    this.elementState = this.elementState === 'hidden' ? 'visible' : 'hidden';
  }

}