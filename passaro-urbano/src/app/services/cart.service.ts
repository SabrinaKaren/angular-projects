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

    let cartItemFound = this.items.find((item: CartItem) => item.id === offer.id );
    //let cartItemFound = this.itens.find((item: CartItem) => item.id === itemCarrinho.id)

    if (cartItemFound){
      cartItemFound.amount++;
    } else {
      this.items.push(this.commonMethods.saleModelToCartItemModel(offer));
    }

  }
  
}