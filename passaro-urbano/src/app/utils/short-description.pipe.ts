import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'shortDescription'
})
export class ShortDescription implements PipeTransform {

    transform(text: string) {
        if (text.length > 15){
            return text.substr(0, 15) + '... ';
        }
        return text;
    }

}