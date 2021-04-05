import { IkeyableObj } from "@/types/otherTypes"

export const isEmpty = (obj: IkeyableObj): boolean => {
  return Object.keys(obj).length === 0
}