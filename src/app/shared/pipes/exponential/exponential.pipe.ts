import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exponential'
})
export class ExponentialPipe implements PipeTransform {

  // ¿Qué hace un pipe? transformar un dato
  transform(value: number): any {
    return Math.pow(value, 2);
  }

}
