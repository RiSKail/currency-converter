import { IkeyableObj } from "@/types/otherTypes"

export const isEmpty = (obj: IkeyableObj): boolean => {
  return Object.keys(obj).length === 0
}

export const geoArrayToObject = (array: number[]): IkeyableObj => {
  return Object.assign({ 'lat': array[0], 'lng': array[1] })
}
