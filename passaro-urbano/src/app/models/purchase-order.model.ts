import { CartItem } from './cart-item';

export class PurchaseOrder {
    constructor(
        public address: string,
        public addressNumber: string,
        public addressComplement: string,
        public paymentType: string,
        public items: CartItem[]
    ){}
}