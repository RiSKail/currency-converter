export interface KeyableObj {
  [key: string]: any
}

export interface Modal {
  show: string | boolean | undefined
  type?: string | undefined
  text?: string | undefined
}

export interface Alert extends Modal {
  time?: number
}
