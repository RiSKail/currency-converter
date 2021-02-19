
import React, { useState } from 'react'
import { useIntl } from 'react-intl'
import { useDispatch, useSelector } from 'react-redux'

import ConvertBlock from './styles'
import Select from '@/components/controls/Select'
import { setBasePrimaryValue, setBaseSecondaryValue } from '../../../actions'

export default ({ currenciesList, type }) => {
  const intl = useIntl()
  const placeholder = intl.formatMessage({ id: 'convert_block_placeholder' })
  const dispatch = useDispatch()
  const baseValue = useSelector(state => state.baseValues[type])

  const [inputValue, setInputValue] = useState('')

  const onChangeInput = ({ target: { value } }) => {
    setInputValue(value)
  }

  const onChangeSelect = ({ target: { value } }) => {
    switch (type) {
      case 'primary':
        dispatch(setBasePrimaryValue(value))
        break;
      case 'secondary':
        dispatch(setBaseSecondaryValue(value))
        break;
      default:
        dispatch(setBasePrimaryValue(value))
        break;
    }
  }

  console.log(baseValue)
  return (
    <ConvertBlock>
      <Select value={baseValue} onChange={onChangeSelect}>
        <option disabled>Выберите валюту</option>
        {(currenciesList) ? Object.keys(currenciesList).map((elem, index) => <option key={index} value={elem}>{elem}</option>) : null}
      </Select>
      <input type="text" value={inputValue} onChange={onChangeInput} placeholder={placeholder} />
    </ConvertBlock>
  )
}
