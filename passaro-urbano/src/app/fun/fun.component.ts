import { SalesService } from './../services/sales.service';
import { Component, OnInit } from '@angular/core';
import { Sale } from '../models/sale.model';

@Component({
  selector: 'app-fun',
  templateUrl: './fun.component.html',
  styleUrls: ['./fun.component.scss'],
  providers: [ SalesService ]
})
export class FunComponent implements OnInit {

  sales: Array<Sale>;

  constructor(private salesService: SalesService) { }

  ngOnInit() {
    this.salesService.getSalesByCategory('diversao')
        .then((sales: Array<Sale>) => {
          this.sales = sales;
        })
  }

}