import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Image } from '../../models/image.model';

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

  state = 'visible';

  images: Image[] = [
    {state: 'visible', url: '/assets/banner-acesso/img_1.png'},
    {state: 'hidden', url: '/assets/banner-acesso/img_2.png'},
    {state: 'hidden', url: '/assets/banner-acesso/img_3.png'},
    {state: 'hidden', url: '/assets/banner-acesso/img_4.png'},
    {state: 'hidden', url: '/assets/banner-acesso/img_5.png'},
  ]

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => this.rotationLogic(), 2000);
  }

  rotationLogic(){

    let nextImgIndex;
    
    // ocutando a imagem que está visível
    for (let i=0; i<this.images.length; i++){
      if (this.images[i].state === 'visible'){
        this.images[i].state = 'hidden';
        nextImgIndex = i === this.images.length-1 ? 0 : i+1;
        break;
      }
    }

    // tornando visível a próxima imagem do array
    this.images[nextImgIndex].state = 'visible';

    // tornando a função recursiva
    setTimeout(() => this.rotationLogic(), 2000);

  }

}