import { Pipe, PipeTransform } from '@angular/core';
@Pipe({name: 'GradePipes'})
export class GradePipes implements PipeTransform {
    transform(value: number): string {

        if ( value < 100) {
               return 'Simple Customer';
        } else {
               return 'Gold Customer';
        }
         // throw new Error("Method not implemented.");
    }
}
