import { Observable, Subject } from 'rxjs';
import { switchMap, debounceTime, distinctUntilChanged, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
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
  searchSubject: Subject<string> = new Subject<string>();

  constructor(private salesService: SalesService) { }

  ngOnInit() {

    this.sales = this.searchSubject
        .pipe(
          debounceTime(1000),
          distinctUntilChanged(),
          switchMap((text) => {
            if (text == undefined || text.trim() === ''){
              return of<Array<Sale>>([]);
            }
            return this.salesService.getSalesByTextToSearch(text);
          }),
          catchError((error: any) => {
            console.log(error);
            return of<Array<Sale>>([]);
          })
        )

  }

  search(textToSearch: string) {
    this.searchSubject.next(textToSearch);
  }

  cleanFieldOfSeacrh(){
    this.searchSubject.next();
  }

}