export interface Code {
  value: string;
  label: string;
  frequency: number;
  barWidth: number;
}

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
