import { IkeyableObj } from '@/types/otherTypes'

export interface ImapState {
  values?: IkeyableObj;
  center: Array<number>;
  pathOptions: IkeyableObj;
  minZoom: number;
  zoom: number;
  type: string;
}
