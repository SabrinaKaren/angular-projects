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

    if (cartItemFound){
      cartItemFound.amount++;
    } else {
      this.items.push(this.commonMethods.saleModelToCartItemModel(offer));
    }

  }

  calculateTotalValue(){
    let totalValue = 0;
    this.items.map((item: CartItem) => {
      totalValue += (item.value * item.amount);
    })
    return totalValue;
  }

  incrementAmountOfItem(itemOfCart: CartItem){
    let cartItemFound = this.items.find((item: CartItem) => item.id === itemOfCart.id );
    if (cartItemFound){
      cartItemFound.amount++;
    }
  }

  decrementAmountOfItem(itemOfCart: CartItem){
    let cartItemFound = this.items.find((item: CartItem) => item.id === itemOfCart.id );
    if (cartItemFound){
      if (cartItemFound.amount > 1) cartItemFound.amount--;
      else this.items.splice(this.items.indexOf(cartItemFound), 1);
    }
  }

  cleanCart(){
    this.items = [];
  }
  
}