import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-access',
  templateUrl: './access.component.html',
  styleUrls: ['./access.component.scss'],
  animations: [
    trigger('banner-animation', [
      state('created', style({
        opacity: 1
      })),
      transition('void => created', [
        style({ opacity: 0, transform: 'translate(-50px, 0)' }),
        animate('500ms 0s ease-in-out')
      ])
    ]),
    trigger('panel-animation', [
      state('created', style({
        opacity: 1
      })),
      transition('void => created', [
        style({ opacity: 0, transform: 'translate(50px, 0)' }),
        animate('500ms 0s ease-in-out')
      ])
    ])
  ]
})
export class AccessComponent implements OnInit {

  bannerState = 'created';
  panelState = 'created';
  register = false;

  constructor() { }

  ngOnInit(): void {
  }

  showPanel(event: string){
    this.register = event === 'register' ? true : false;
  }

}