import { Component, Input } from '@angular/core';

import { Sweep } from './study'
import { Variable } from './variable'

@Component({
  selector: 'sweep-detail',
  templateUrl: './sweep-detail.component.html'
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
