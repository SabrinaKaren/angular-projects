import { Observable } from 'rxjs';
import { SalesService } from './../services/sales.service';
import { Component, OnInit } from '@angular/core';
import { Sale } from '../models/sale.model';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
  providers: [ SalesService ]
})
export class TopBarComponent implements OnInit {

  sales: Observable<Array<Sale>>;

  constructor(private salesService: SalesService) { }

  ngOnInit() {
  }

  search(textToSearch: string) {

    this.sales = this.salesService.getSalesByTextToSearch(textToSearch);

    this.sales.subscribe(
      (sales: Array<Sale>) => { console.log(sales) },
      (error: any) => { console.log('Ops... um erro ocorreu - status: ' + error.status) },
      () => { console.log('Fluxo de eventos completo') }
    );

  }

}