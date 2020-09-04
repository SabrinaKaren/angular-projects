import { Component, OnInit, ViewChild } from '@angular/core';
import { PurchaseOrderService } from '../services/purchase-order.service';
import { PurchaseOrder } from '../models/purchase-order.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-purchase-order',
  templateUrl: './purchase-order.component.html',
  styleUrls: ['./purchase-order.component.scss'],
  providers: [ PurchaseOrderService ]
})
export class PurchaseOrderComponent implements OnInit {

  @ViewChild('form', {static: false}) form: NgForm;
  purchaseId: number;

  constructor(private purchaseOrderService: PurchaseOrderService) { }

  ngOnInit() {
  }

  makePurchase(){

    let purchase: PurchaseOrder = new PurchaseOrder(
      this.form.value.address,
      this.form.value.addressNumber,
      this.form.value.addressComplement,
      this.form.value.paymentType
    );

    this.purchaseOrderService.makePurchase(purchase)
        .subscribe((purchaseId: number) => {
          this.purchaseId = purchaseId;
        })

  }

}