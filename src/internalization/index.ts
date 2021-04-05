import { ENGLISH, RUSSIAN } from '@/constants'
import { IkeyableObj } from '@/types/otherTypes'

export const languages = [
  { label: 'English', value: ENGLISH },
  { label: 'Русский', value: RUSSIAN },
]

const internationalization = (language: string): IkeyableObj => {
  switch (language) {
    case ENGLISH:
    case RUSSIAN: return require(`./${language}.ts`).default
    default: return {}
  }
}

export default internationalization
