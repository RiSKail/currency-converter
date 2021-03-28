interface Ivalue {
  type: string;
  value: string;
}

export interface IvaluesState {
  [key: string]: Ivalue;
  primary: Ivalue;
  secondary: Ivalue;
}
