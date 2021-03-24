export interface IKeyableObj {
  [key: string]: any,
}

export interface IModal {
  show: string | boolean | undefined,
  type?: string | undefined,
  text?: string | undefined,
}

export interface IAlert extends IModal {
  time?: number,
}
