interface IValue {
  type: string,
  value: string,
}

export interface IValuesState {
  [key: string]: IValue,
  primary: IValue;
  secondary: IValue;
}
