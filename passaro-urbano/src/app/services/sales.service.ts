import { Injectable } from '@angular/core';
import { Sale } from '../models/sale.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  constructor(private http: HttpClient) { }

  getSales(): Promise<Array<Sale>> {
    return this.http.get("http://localhost:3000/sales")
        .toPromise()
        .then((response: any) => response);
  }

}