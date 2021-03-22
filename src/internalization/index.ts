import { ENGLISH, RUSSIAN } from '@/constants'

export const languages = [
  { label: 'English', value: ENGLISH },
  { label: 'Русский', value: RUSSIAN },
]

const internationalization = (language: string) => {
  switch (language) {
    case ENGLISH:
    case RUSSIAN: return require(`./${language}.ts`).default
    default: return {}
  }
}

export default internationalization
