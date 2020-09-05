import { Sale } from '../models/sale.model';
import { CartItem } from '../models/cart-item';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class CommonMethods {

    saleModelToCartItemModel(sale: Sale): CartItem {
        return new CartItem(
            sale.id,
            sale.images[0],
            sale.title,
            sale.description,
            sale.value,
            1
        );
    }

}