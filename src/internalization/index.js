import { ENGLISH, RUSSIAN } from '@/constants'

export const languages = [
  { label: 'English', value: ENGLISH },
  { label: 'Русский', value: RUSSIAN },
]

export default language => {
  switch (language) {
    case ENGLISH:
    case RUSSIAN: return require(`./${language}.js`).default
    default: return {}
  }
}
