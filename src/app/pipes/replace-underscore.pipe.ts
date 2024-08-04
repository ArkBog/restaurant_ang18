import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceUnderscore',
  standalone: true
})
export class ReplaceUnderscorePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {

    value = value.replaceAll('_', ' ');
    return value;
  }

}
