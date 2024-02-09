import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberFormat',
  standalone: true,
})
export class NumberFormatPipe implements PipeTransform {
  transform(value: any): any {
    let config = {};

    if (value > 9999) {
      config = {
        notation: 'compact',
        maximumFractionDigits: 1,
      };
    }

    return Intl.NumberFormat('tr', config).format(value);
  }
}
