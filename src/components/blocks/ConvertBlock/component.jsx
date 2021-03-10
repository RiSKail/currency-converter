
import React from 'react'
import pt from 'prop-types'
import { useIntl } from 'react-intl'
import { useDispatch, useSelector } from 'react-redux'
import ReactFlagsSelect from 'react-flags-select'

import ConvertBlockStyle from './styles'
import { setBasePrimaryType, setBaseSecondaryType, setBasePrimaryValue, setBaseSecondaryValue } from '@/actions'
import { countries } from '@/constants'

const ConvertBlock = ({ type, storedValue, setValue }) => {
  const intl = useIntl()
  const inputPlaceholder = intl.formatMessage({ id: 'convert_block_input_placeholder' })
  const selectPlaceholder = intl.formatMessage({ id: 'convert_block_select_placeholder' })
  const dispatch = useDispatch()
  const valueType = useSelector(state => state.values[type].type)
  const valueData = useSelector(state => state.values[type].value)
  const [key] = Object.entries(countries).find(([, name]) => valueType === name)

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
    <ConvertBlockStyle>
      <ReactFlagsSelect
        selected={key}
        onSelect={code => onChangeSelect(countries[code])}
        customLabels={countries}
        countries={[...Object.keys(countries).map(elem => elem)]}
        selectButtonClassName="selectBtn"
        className="select"
        searchPlaceholder={selectPlaceholder}
        searchable />
      <input
        type="text"
        value={valueData}
        onChange={onChangeInput}
        placeholder={inputPlaceholder} />
    </ConvertBlockStyle>
  )
}

ConvertBlock.propTypes = {
  setValue: pt.func.isRequired,
  type: pt.string.isRequired,
  storedValue: pt.array.isRequired,
}

export default ConvertBlock
