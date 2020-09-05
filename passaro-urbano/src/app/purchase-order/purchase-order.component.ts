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

  constructor(private purchaseOrderService: PurchaseOrderService) { }

  ngOnInit() {
  }

  makePurchase(){
    console.log(this.formGroup);
  }

}