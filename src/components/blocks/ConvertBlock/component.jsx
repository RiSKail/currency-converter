
import React from 'react'
import { useIntl } from 'react-intl'
import { useDispatch, useSelector } from 'react-redux'
import ReactFlagsSelect from 'react-flags-select'

import ConvertBlock from './styles'
import { setBasePrimaryType, setBaseSecondaryType, setBasePrimaryValue, setBaseSecondaryValue } from '../../../actions'
import { countries } from './../../../constants/countries'

export default ({ type, storedValue, setValue }) => {
  const intl = useIntl()
  const inputPlaceholder = intl.formatMessage({ id: 'convert_block_input_placeholder' })
  const selectPlaceholder = intl.formatMessage({ id: 'convert_block_select_placeholder' })
  const dispatch = useDispatch()
  const baseValue = useSelector(state => state.baseValues[type].type)
  const inputValue = useSelector(state => state.baseValues[type].value)
  const [key] = Object.entries(countries).find(([, name]) => baseValue === name)

  const onChangeInput = ({ target: { value } }) => {
    switch (type) {
      case 'primary':
        dispatch(setBasePrimaryValue(value))
        break
      case 'secondary':
        dispatch(setBaseSecondaryValue(value))
        break
      default:
        dispatch(setBasePrimaryValue(value))
        break
    }
  }

  const onChangeSelect = value => {
    switch (type) {
      case 'primary':
        setValue([value, storedValue[1]])
        dispatch(setBasePrimaryType(value))
        break
      case 'secondary':
        setValue([storedValue[0], value])
        dispatch(setBaseSecondaryType(value))
        break
      default:
        dispatch(setBasePrimaryType(value))
        break
    }
  }

  return (
    <ConvertBlock>
      <ReactFlagsSelect
        selected={key}
        onSelect={code => onChangeSelect(countries[code])}
        customLabels={countries}
        countries={[...Object.keys(countries).map(elem => elem)]}
        selectButtonClassName="selectBtn"
        className="select"
        searchPlaceholder={selectPlaceholder}
        searchable />
      <input type="text" value={inputValue} onChange={onChangeInput} placeholder={inputPlaceholder} />
    </ConvertBlock>
  )
}
