import { Pipe, PipeTransform } from '@angular/core';

import { Code } from '../../variable/shared/code.model';

@Pipe({name: 'displayCodes'})

export class DisplayCodePipe implements PipeTransform {
  transform(value: Code[]): Code[] {
    //value = value.filter(code => code.value[0] != '-');
    var sum = value.map(x => x.frequency).reduce((s, v) => s + v)
    value.forEach(code => code.barWidth = 100 * (code.frequency / sum))
    return value;
  }
}
