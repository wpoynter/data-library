import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'datasetTitle'})

export class DatasetTitlePipe implements PipeTransform {
  transform(value: string): string {
    return value.replace(/BCS70|Dataset|\(\d{4}\)/gi, '');
  }
}
