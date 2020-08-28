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

    this.salesService.getSales()
      .then((sales: Sale[]) => {
        this.salesList = sales
      })
      .catch((error: any) => { 
        console.log(error) 
      })

  }

}