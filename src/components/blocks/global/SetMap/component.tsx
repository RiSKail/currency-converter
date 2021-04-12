import React from 'react'

import Select from '@/components/controls/Select'

import { LEAFLET, GOOGLE, YANDEX } from '@/constants'
import { MapActionTypes } from '@/types/actions'

interface Props {
  active: string
  onSetEngine: (type: string) => MapActionTypes
}

export const engines = [
  { label: 'Leaflet', value: LEAFLET },
  { label: 'Google', value: GOOGLE },
  { label: 'Yandex', value: YANDEX },
]

const SetMap: React.FC<Props> = ({ active, onSetEngine }) => {
  const onChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    onSetEngine(event.target.value)
  }

  return (
    <Select onChange={onChange} value={active}>
      {engines.map(({ label, value }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </Select>
  )
}

export default SetMap
