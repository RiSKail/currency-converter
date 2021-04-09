import React from 'react'
import pt from 'prop-types'

import Select from '@/components/controls/Select'

import { LEAFLET, GOOGLE, YANDEX } from '@/constants'
import { MapActionTypes } from '@/types/actions'

interface Iprops {
  active: string;
  onSetType: (type: string) => MapActionTypes;
}

export const types = [
  { label: 'Leaflet', value: LEAFLET },
  { label: 'Google', value: GOOGLE },
  { label: 'Yandex', value: YANDEX },
]

const SetMap: React.FC<Iprops> = ({ active, onSetType }) => {
  const onChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    onSetType(event.target.value)
  }

  return (
    <Select onChange={onChange} value={active}>
      {types.map(({ label, value }) => (
        <option key={value} value={value}>{label}</option>
      ))}
    </Select>
  )
}

SetMap.propTypes = {
  active: pt.string.isRequired,
  onSetType: pt.func.isRequired,
}

export default SetMap
