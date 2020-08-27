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

    //this.salesList = this.salesService.getSales();

    this.salesService.getSalesWithPromesis()
      .then((sales: Sale[]) => {
        console.log('Resolução da promise no Component, com 3 segundos de latência')
        this.salesList = sales
      })
      .catch((error: any) => { 
        console.log(error) 
      })

  }

}