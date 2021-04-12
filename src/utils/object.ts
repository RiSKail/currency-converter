import { KeyableObj } from '@/types/otherTypes'

export const isEmpty = (obj: KeyableObj): boolean => Object.keys(obj).length === 0

export const geoArrayToObject = (array: number[]): KeyableObj => ({
  lat: array[0],
  lng: array[1],
})
