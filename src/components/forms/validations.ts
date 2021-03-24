export const required = (value: string) => (value ? undefined : 'Required')
export const composeValidators = (...validators: any) => (value: string) =>
  validators.reduce((error: string, validator: any) => error || validator(value), undefined)
