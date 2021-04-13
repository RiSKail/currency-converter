interface Value {
  type: string
  value: string
}

export interface ValuesState {
  [key: string]: Value
  primary: Value
  secondary: Value
}
