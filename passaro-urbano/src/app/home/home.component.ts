import { Component, OnInit } from '@angular/core';
import { SalesService } from '../services/sales.service';
import { Sale } from '../models/sale.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [SalesService]
})
export class HomeComponent implements OnInit {

  salesList: Array<Sale>;

  constructor(private salesService: SalesService) { }

  ngOnInit() {
    this.salesList = this.salesService.getSales();
  }

}