import React from 'react'

import Select from '@/components/controls/Select'

import { languages } from '@/internalization'
import { InternalizationActionTypes } from '@/types/actions'

interface Props {
  active: string
  onSetLocale: (locale: string) => InternalizationActionTypes
}

const SetLocale: React.FC<Props> = ({ active, onSetLocale }) => {
  const onChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    onSetLocale(event.target.value)
  }

  return (
    <Select onChange={onChange} value={active}>
      {languages.map(({ label, value }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </Select>
  )
}

export default SetLocale
