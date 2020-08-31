import { SalesService } from './../services/sales.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Sale } from '../models/sale.model';
import { Observable, Observer } from 'rxjs';
import { interval } from 'rxjs';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss'],
  providers: [ SalesService ]
})
export class OfferComponent implements OnInit {

  offer: Sale;

  constructor(
    private route: ActivatedRoute,
    private salesService: SalesService
  ) { }

  ngOnInit() {

    this.salesService.getSaleById(this.route.snapshot.params['id'])
        .then((sale: Sale) => {
          this.offer = sale;
        })
    
    // observável (observable)
    let newObservable = Observable.create((observer: Observer<string>) => {
      observer.next('Primeiro evento');
      observer.next('Segundo evento');
      observer.complete();
      //observer.error('Ocorreu um erro, então a strem será encerrada');
      observer.next('Terceiro evento');
    })

    // observador (observer)
    newObservable.subscribe(
      (response: string) => {
        console.log(response); // ação a ser tomada em cada evento de next
      },
      (error: string) =>{
        console.log(error); // ação a ser tomada para evento de erro
      },
      () => {
        console.log('Strem de eventos finalizada com sucesso'); // ação a ser tomada para evento de complete
      }
    )

  }  

}