import { CartService } from './../services/cart.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { PurchaseOrderService } from '../services/purchase-order.service';
import { PurchaseOrder } from '../models/purchase-order.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CartItem } from '../models/cart-item';

@Component({
  selector: 'app-purchase-order',
  templateUrl: './purchase-order.component.html',
  styleUrls: ['./purchase-order.component.scss'],
  providers: [ PurchaseOrderService ]
})
export class PurchaseOrderComponent implements OnInit {

  formGroup: FormGroup = new FormGroup({
    'address': new FormControl(null, [ Validators.required, Validators.minLength(3), Validators.maxLength(120) ]),
    'addressNumber': new FormControl(null, [ Validators.required, Validators.minLength(1), Validators.maxLength(10) ]),
    'addressComplement': new FormControl(null),
    'paymentForm': new FormControl(null, [ Validators.required ])
  });

  purchaseId: number;
  items: CartItem[] = [];

  constructor(
    private purchaseOrderService: PurchaseOrderService,
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.items = this.cartService.showItems();
  }

  makePurchase(){

    if (this.formGroup.status === 'INVALID'){
      this.formGroup.get('address').markAsTouched();
      this.formGroup.get('addressNumber').markAsTouched();
      this.formGroup.get('addressComplement').markAsTouched();
      this.formGroup.get('paymentForm').markAsTouched();
    } else {

      if (this.cartService.showItems().length <= 0){
        alert('Seu carrinho está vazio!')
      } else {

        let purchase = new PurchaseOrder(
          this.formGroup.value.address,
          this.formGroup.value.addressNumber,
          this.formGroup.value.addressComplement,
          this.formGroup.value.paymentType,
          this.cartService.showItems()
        );
  
        this.purchaseOrderService.makePurchase(purchase)
            .subscribe((purchaseId: number) => {
              this.purchaseId = purchaseId;
              this.cartService.cleanCart();
            })
  
      }
    }

  }

  incrementAmountOfItem(item: CartItem){
    this.cartService.incrementAmountOfItem(item);
  }

  decrementAmountOfItem(item: CartItem){
    this.cartService.decrementAmountOfItem(item);
  }

}