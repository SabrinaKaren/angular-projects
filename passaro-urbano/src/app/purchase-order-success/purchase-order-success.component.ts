import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-purchase-order-success',
  templateUrl: './purchase-order-success.component.html',
  styleUrls: ['./purchase-order-success.component.scss']
})
export class PurchaseOrderSuccessComponent implements OnInit {

  @Input() purchaseOrderId;

  constructor() { }

  ngOnInit() {
  }

}
