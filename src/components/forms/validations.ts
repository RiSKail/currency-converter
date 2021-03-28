export const required = (value: string): undefined | string => (value ? undefined : 'Required')
