export class PurchaseOrder {
    constructor(
        public address: string,
        public addressNumber: string,
        public addressComplement: string,
        public paymentType: string
    ){}
}