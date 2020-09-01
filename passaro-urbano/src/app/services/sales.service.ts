import { map, retry } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Sale } from '../models/sale.model';
import { HttpClient } from '@angular/common/http';
import { API_SALES_URL, API_HOW_USE_URL, API_WHERE_IS_URL } from '../app.api';

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  constructor(private http: HttpClient) { }

  getSales(): Promise<Array<Sale>> {
    return this.http.get(`${API_SALES_URL}?featured=true`)
        .toPromise()
        .then((response: any) => { return response } );
  }

  getSalesByCategory(category: string){
    return this.http.get(`${API_SALES_URL}?category=${category}`)
        .toPromise()
        .then((response: any) => { return response });
  }

  getSaleById(id: number) {
    return this.http.get(`${API_SALES_URL}?id=${id}`)
        .toPromise()
        .then((response: any) => { return response[0] });
  }

  getHowUseSaleById(id: number) {
    return this.http.get(`${API_HOW_USE_URL}?id=${id}`)
        .toPromise()
        .then((response: any) => { return response[0].description })
  }

  getWhereIsSaleById(id: number) {
    return this.http.get(`${API_WHERE_IS_URL}?id=${id}`)
        .toPromise()
        .then((response: any) => { return response[0].description })
  }

  getSalesByTextToSearch(textToSearch: string) {
    return this.http.get(`${API_SALES_URL}?description_like=${textToSearch}`)
        .pipe( map((response: any) => { return response }), retry(10) );
  }

}