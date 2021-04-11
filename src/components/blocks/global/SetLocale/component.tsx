import React from 'react'
import pt from 'prop-types'

import Select from '@/components/controls/Select'

import { languages } from '@/internalization'
import { InternalizationActionTypes } from '@/types/actions'

interface Iprops {
  active: string;
  onSetLocale: (locale: string) => InternalizationActionTypes;
}

const SetLocale: React.FC<Iprops> = ({ active, onSetLocale }) => {
  const onChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    onSetLocale(event.target.value)
  }

  return (
    <Select onChange={onChange} value={active}>
      {languages.map(({ label, value }) => (
        <option key={value} value={value}>{label}</option>
      ))}
    </Select>
  )
}

SetLocale.propTypes = {
  active: pt.string.isRequired,
  onSetLocale: pt.func.isRequired,
}

export default SetLocale
