import { Injectable } from '@angular/core';
import { Sale } from '../models/sale.model';

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  constructor() { }

  salesList: Array<Sale> = [
    {
      id: 1,
      category: "restaurante",
      title: "Super Burger",
      description: "Rodízio de Mini-hambúrger com opção de entrada.",
      advertiser: "Original Burger",
      value: 29.90,
      featured: true,
      images: [
        {url: "/assets/ofertas/1/img1.jpg"},
        {url: "/assets/ofertas/1/img2.jpg"},
        {url: "/assets/ofertas/1/img3.jpg"},
        {url: "/assets/ofertas/1/img4.jpg"}
      ]
    },
    {
      id: 2,
      category: "restaurante",
      title: "Cozinha Mexicana",
      description: "Almoço ou Jantar com Rodízio Mexicano delicioso.",
      advertiser: "Mexicana",
      value: 32.90,
      featured: true,
      images: [
        {url: "/assets/ofertas/2/img1.jpg"},
        {url: "/assets/ofertas/2/img2.jpg"},
        {url: "/assets/ofertas/2/img3.jpg"},
        {url: "/assets/ofertas/2/img4.jpg"}
      ]
    
    },
    {
      id: 4,
      category: "diversao",
      title: "Estância das águas",
      description: "Diversão garantida com piscinas, trilhas e muito mais.",
      advertiser: "Estância das águas",
      value: 31.90,
      featured: true,
      images: [
        {url: "/assets/ofertas/3/img1.jpg"},
        {url: "/assets/ofertas/3/img2.jpg"},
        {url: "/assets/ofertas/3/img3.jpg"},
        {url: "/assets/ofertas/3/img4.jpg"},
        {url: "/assets/ofertas/3/img5.jpg"},
        {url: "/assets/ofertas/3/img6.jpg"}
      ]
    }
  ]

  getSales(): Array<Sale> {
    return this.salesList;
  }

  public getSalesWithPromesis(): Promise<Array<Sale>> {

    return new Promise((resolve, reject) => {
      let resolved = true
      if(resolved){
        setTimeout(() => resolve(this.salesList), 3000)
      } else {
        reject({errorCode: 404, errorMsg: 'Mensagem de erro de teste para simular rejeição em Promise'})
      }
    })
    .then((sales: Sale[]) => {
      console.log('Passando pelo primeiro then (resolvendo)')
      return sales
    })
    .then((sales: Sale[]) => {
      console.log('Passando pelo segundo then (resolvendo)')
        return new Promise((resolve2, reject2) => {
          setTimeout(() => {resolve2(sales)},3000)
        })
    })
    .then((sales: Sale[]) => {
      console.log('Passando pelo terceiro then (resolvendo), mas com 3 minutos de latência pois estava esperando a resolução de uma promise')
      return sales
    })

  }

}