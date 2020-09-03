import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-purchase-order',
  templateUrl: './purchase-order.component.html',
  styleUrls: ['./purchase-order.component.scss']
})
export class PurchaseOrderComponent implements OnInit {

  address: string = '';
  addressNumber: string = '';
  addressComplement: string = '';
  formOfPayment: string = '';

  addressIsValid: boolean;
  addressNumberIsValid: boolean;
  addressComplementIsValid: boolean;
  formOfPaymentIsValid: boolean;

  addressIsPrimitive: boolean = true;
  addressNumberIsPrimitive: boolean = true;
  addressComplementIsPrimitive: boolean = true;
  formOfPaymentIsPrimitive: boolean = true;

  constructor() { }

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
  }

  updateAddressNumber(inputAddressNumber: string){
    this.addressNumber = inputAddressNumber;
    this.addressNumberIsPrimitive = false;
    if (inputAddressNumber.length > 0){
      this.addressNumberIsValid = true;
    } else {
      this.addressNumberIsValid = false;
    }
  }

  updateAddressComplement(inputAddressComplement: string){
    this.addressComplement = inputAddressComplement;
    this.addressComplementIsPrimitive = false;
    if (inputAddressComplement.length > 0){
      this.addressComplementIsValid = true;
    } else {
      this.addressComplementIsValid = false;
    }
  }

  updateFormOfPayment(selectFormOfPayment: string){
    this.formOfPayment = selectFormOfPayment;
    this.formOfPaymentIsPrimitive = false;
    if (selectFormOfPayment.length > 0){
      this.formOfPaymentIsValid = true;
    } else {
      this.formOfPaymentIsValid = false;
    }
  }

}