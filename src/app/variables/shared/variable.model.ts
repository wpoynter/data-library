import { Code } from './code.model'

export interface Variable {
  name: string;
  label: string;
  valid: number;
  invalid: number;
  min: number;
  max: number;
  mean: number;
  codes: Code[];
}
