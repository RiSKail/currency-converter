
import React from 'react'
import pt from 'prop-types'
import { useIntl } from 'react-intl'
import { useDispatch, useSelector } from 'react-redux'
import ReactFlagsSelect from 'react-flags-select'

import ConvertBlockStyle from './styles'
import { setBasePrimaryType, setBaseSecondaryType, setBasePrimaryValue, setBaseSecondaryValue } from '@/actions'
import { countries } from '@/constants'
import { IRootState } from '@/types/rootStateTypes'

interface IProps {
  setValue(a: string[]): void,
  type: string,
  storedValue: string[]
}

const ConvertBlock: React.FC<IProps> = ({ type, storedValue, setValue }) => {
  const intl = useIntl()
  const inputPlaceholder = intl.formatMessage({ id: 'convert_block_input_placeholder' })
  const selectPlaceholder = intl.formatMessage({ id: 'convert_block_select_placeholder' })
  const dispatch = useDispatch()
  const valueType = useSelector((state: IRootState) => state.values[type].type)
  const valueData = useSelector((state: IRootState) => state.values[type].value)
  const key: Array<string> = Object.entries(countries)
    .find(([, name]) => valueType === name) || ['USD']

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
    switch (type) {
      case 'primary':
        dispatch(setBasePrimaryValue(event.target.value))
        break
      case 'secondary':
        dispatch(setBaseSecondaryValue(event.target.value))
        break
      default:
        dispatch(setBasePrimaryValue(event.target.value))
        break
    }
  }

  const onChangeSelect = (value: string): void => {
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
        selected={key[0]}
        onSelect={(code: string) => onChangeSelect(countries[code])}
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
