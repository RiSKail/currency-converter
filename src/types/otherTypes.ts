export interface IkeyableObj {
  [key: string]: any;
}

export interface Imodal {
  show: string | boolean | undefined;
  type?: string | undefined;
  text?: string | undefined;
}

export interface Ialert extends Imodal {
  time?: number;
}
