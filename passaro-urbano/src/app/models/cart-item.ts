class CartItem {

    constructor(
        public id: number,
        public img: object,
        public title: string,
        public description: string,
        public value: number,
        public amount: number
    ) {}

}

export {CartItem}