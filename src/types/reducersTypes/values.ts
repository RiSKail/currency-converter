interface IValue {
  type: string,
  value: string,
}

export interface IValuesState {
  primary: IValue;
  secondary: IValue;
}
