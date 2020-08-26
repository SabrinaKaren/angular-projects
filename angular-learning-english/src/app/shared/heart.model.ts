export class Heart {

    constructor(
        public isFull: boolean,
        public fullHeartUrl: string = '/assets/coracao_cheio.png',
        public emptyHeartUrl: string = '/assets/coracao_vazio.png'
    ){}

    getHeartUrl(): string {
        if (this.isFull){
            return this.fullHeartUrl;
        } else {
            return this.emptyHeartUrl;
        }
    }

}