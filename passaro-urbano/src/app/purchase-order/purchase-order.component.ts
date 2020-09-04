import { Component, OnInit } from '@angular/core';
import { PurchaseOrderService } from '../services/purchase-order.service';
import { PurchaseOrder } from '../models/purchase-order.model';

@Component({
  selector: 'app-purchase-order',
  templateUrl: './purchase-order.component.html',
  styleUrls: ['./purchase-order.component.scss'],
  providers: [ PurchaseOrderService ]
})
export class PurchaseOrderComponent implements OnInit {

  address: string = '';
  addressNumber: string = '';
  addressComplement: string = '';
  paymentType: string = '';

  addressIsValid: boolean;
  addressNumberIsValid: boolean;
  addressComplementIsValid: boolean;
  paymentTypeIsValid: boolean;

  addressIsPrimitive: boolean = true;
  addressNumberIsPrimitive: boolean = true;
  addressComplementIsPrimitive: boolean = true;
  paymentTypeIsPrimitive: boolean = true;

  formStatus: string = 'disabled';
  purchaseOrder: PurchaseOrder = new PurchaseOrder('', '', '', '');

  constructor(private purchaseOrderService: PurchaseOrderService) { }

  ngOnInit() {
  }

  updateAddress(inputAddress: string){
    this.address = inputAddress;
    this.addressIsPrimitive = false;
    if (inputAddress.length > 3){
      this.addressIsValid = true;
    } else {
      this.addressIsValid = false;
    }
    this.analyzeForm();
  }

  updateAddressNumber(inputAddressNumber: string){
    this.addressNumber = inputAddressNumber;
    this.addressNumberIsPrimitive = false;
    if (inputAddressNumber.length > 0){
      this.addressNumberIsValid = true;
    } else {
      this.addressNumberIsValid = false;
    }
    this.analyzeForm();
  }

  updateAddressComplement(inputAddressComplement: string){
    this.addressComplement = inputAddressComplement;
    this.addressComplementIsPrimitive = false;
    if (inputAddressComplement.length > 0){
      this.addressComplementIsValid = true;
    } else {
      this.addressComplementIsValid = false;
    }
    this.analyzeForm();
  }

  updatepaymentType(selectpaymentType: string){
    this.paymentType = selectpaymentType;
    this.paymentTypeIsPrimitive = false;
    if (selectpaymentType.length > 0){
      this.paymentTypeIsValid = true;
    } else {
      this.paymentTypeIsValid = false;
    }
    this.analyzeForm();
  }

  analyzeForm(){
    if (this.addressIsValid === true && this.addressNumberIsValid === true && this.paymentTypeIsValid === true){
      this.formStatus = '';
    } else {
      this.formStatus = 'disabled';
    }
  }

  makePurchase(){
    this.purchaseOrder.address = this.address;
    this.purchaseOrder.addressNumber = this.addressNumber;
    this.purchaseOrder.addressComplement = this.addressComplement;
    this.purchaseOrder.paymentType = this.paymentType;
    this.purchaseOrderService.makePurchase(this.purchaseOrder)
        .subscribe();
  }

}