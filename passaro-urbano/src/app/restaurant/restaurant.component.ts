import { SalesService } from './../services/sales.service';
import { Component, OnInit } from '@angular/core';
import { Sale } from '../models/sale.model';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss'],
  providers: [ SalesService ]
})
export class RestaurantComponent implements OnInit {

  sales: Array<Sale>;

  constructor(private salesService: SalesService) { }

  ngOnInit() {
    this.salesService.getSalesByCategory('restaurante')
        .then((sales: Sale[]) => {
          this.sales = sales;
        })
  }

}