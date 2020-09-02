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

  salesInObservable: Observable<Array<Sale>>;
  searchSubject: Subject<string> = new Subject<string>();
  sales: Array<Sale>;

  constructor(private salesService: SalesService) { }

  ngOnInit() {

    this.salesInObservable = this.searchSubject
        .pipe(
          debounceTime(1000),
          distinctUntilChanged(),
          switchMap((text) => {
            console.log('Passando pelo Subject: ' + text);
            if (text.trim() === ''){
              return of<Array<Sale>>([]);
            }
            return this.salesService.getSalesByTextToSearch(text);
          }),
          catchError((error: any) => {
            console.log(error);
            return of<Array<Sale>>([]);
          })
        )
    
    this.salesInObservable.subscribe((sales: Array<Sale>) => {
      this.sales = sales;
    })

  }

  search(textToSearch: string) {
    console.log('Keyup: ' + textToSearch);
    this.searchSubject.next(textToSearch);
  }

}