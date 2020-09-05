import { Sale } from './../models/sale.model';
import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart-item';
import { CommonMethods } from '../utils/common-methods';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: CartItem[] = [];

  constructor(private commonMethods: CommonMethods) { }

  showItems(){
    return this.items;
  }

  addItem(offer: Sale){
    this.items.push(this.commonMethods.saleModelToCartItemModel(offer));
  }
  
}