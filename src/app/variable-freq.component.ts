import { Component, Input } from '@angular/core';

import { Variable } from './variable'

@Component({
  selector: 'variable-freq',
  templateUrl: './variable-freq.component.html',
  styleUrls: ['./variable-freq.component.css']
})
export class VariableFreqComponent {
  @Input() variable: Variable;
}
