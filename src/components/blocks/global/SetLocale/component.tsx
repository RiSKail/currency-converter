import React from 'react'
import pt from 'prop-types'

import Select from '@/components/controls/Select'
import { languages } from '@/internalization'

const SetLocale = ({ active, onSetLocale }) => {
  const onChange = ({ target: { value } }) => {
    onSetLocale(value)
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
