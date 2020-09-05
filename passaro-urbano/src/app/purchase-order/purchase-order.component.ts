import { CartService } from './../services/cart.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { PurchaseOrderService } from '../services/purchase-order.service';
import { PurchaseOrder } from '../models/purchase-order.model';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';

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

  constructor(
    private purchaseOrderService: PurchaseOrderService,
    private cartService: CartService
  ) { }

  ngOnInit() {
    console.log('Itens a nivel de ORDEM DE COMPRA: ');
    console.log(this.cartService.showItems());
  }

  makePurchase(){

    if (this.formGroup.status === 'INVALID'){
      this.formGroup.get('address').markAsTouched();
      this.formGroup.get('addressNumber').markAsTouched();
      this.formGroup.get('addressComplement').markAsTouched();
      this.formGroup.get('paymentForm').markAsTouched();
    } else {

      let purchase = new PurchaseOrder(
        this.formGroup.value.address,
        this.formGroup.value.addressNumber,
        this.formGroup.value.addressComplement,
        this.formGroup.value.paymentType
      );

      this.purchaseOrderService.makePurchase(purchase)
          .subscribe((purchaseId: number) => {
            this.purchaseId = purchaseId;
          })

    }

  }

}