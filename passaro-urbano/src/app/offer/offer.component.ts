import { SalesService } from './../services/sales.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Sale } from '../models/sale.model';

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
  }  

}