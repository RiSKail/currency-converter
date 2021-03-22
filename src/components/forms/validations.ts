export const required = (value: any) => (value ? undefined : 'Required')
export const composeValidators = (...validators: any) => (value: any) =>
  validators.reduce((error: any, validator: any) => error || validator(value), undefined)
