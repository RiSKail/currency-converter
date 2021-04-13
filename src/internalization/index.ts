import { ENGLISH, RUSSIAN } from '@/constants'
import { KeyableObj } from '@/types/otherTypes'

export const languages = [
  { label: 'English', value: ENGLISH },
  { label: 'Русский', value: RUSSIAN },
]

const internationalization = (language: string): KeyableObj => {
  switch (language) {
    case ENGLISH:
    case RUSSIAN:
      return require(`./${language}.ts`).default
    default:
      return {}
  }
}

export default internationalization
