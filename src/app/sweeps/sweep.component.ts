import { Component, Input } from '@angular/core';

import { Sweep } from './shared/sweep.model'
import { Variable } from '../variables/shared/variable.model'

@Component({
  selector: 'sweep',
  templateUrl: './sweep.component.html'
})
export class SweepDetailComponent {
  @Input() sweep: Sweep;
  selectedVariable: Variable;

  onSelect(variable: Variable): void {
    if (this.selectedVariable == variable) {
      this.selectedVariable = null;
    } else {
      this.selectedVariable = variable;
    }
  }
}
