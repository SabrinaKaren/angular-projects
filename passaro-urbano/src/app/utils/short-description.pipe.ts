import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'shortDescription'
})
export class ShortDescription implements PipeTransform {

    transform(text: string, position: number) {
        if (text.length > position){
            return text.substr(0, position) + '... ';
        }
        return text;
    }

}