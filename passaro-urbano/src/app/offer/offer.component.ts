import { SalesService } from './../services/sales.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Sale } from '../models/sale.model';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss'],
  providers: [ SalesService ]
})
export class OfferComponent implements OnInit, OnDestroy {

  offer: Sale;

  constructor(private route: ActivatedRoute, private salesService: SalesService) { }

  ngOnInit() {

    this.route.params.subscribe((params: Params) => {
      this.salesService.getSaleById(params.id)
        .then((sale: Sale) => {
          this.offer = sale;
        })
    })    

  }

  ngOnDestroy() {
  }

}