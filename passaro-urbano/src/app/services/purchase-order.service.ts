import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PurchaseOrder } from '../models/purchase-order.model';
import { API_PURCHASE_ORDER_URL } from '../app.api';

@Injectable({
  providedIn: 'root'
})
export class PurchaseOrderService {
  
  constructor(private http: HttpClient) { }

  makePurchase(purchaseOrder: PurchaseOrder){

    return this.http.post(
      API_PURCHASE_ORDER_URL,
      purchaseOrder
    ).pipe(map((response: Response) => {
      console.log(response)
    }))

  }

}