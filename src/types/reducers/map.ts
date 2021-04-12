import { KeyableObj } from '@/types/otherTypes'

export interface MapState {
  values?: KeyableObj
  center: Array<number>
  pathOptions: KeyableObj
  minZoom: number
  zoom: number
  engine: string
}
