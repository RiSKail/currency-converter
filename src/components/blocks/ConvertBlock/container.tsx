
import React from 'react'
import ReactFlagsSelect from 'react-flags-select'
import { useIntl } from 'react-intl'
import { useDispatch, useSelector } from 'react-redux'
import pt from 'prop-types'
import { setBasePrimaryType, setBaseSecondaryType, setBasePrimaryValue, setBaseSecondaryValue } from '@/actions'
import { IrootState } from '@/types/rootStateTypes'
import { countries } from '@/constants'
import ConvertBlockStyle from './styles'

interface Iprops {
  setValue(a: string[]): void;
  type?: string;
  storedValue: string[];
}

const Convert: React.FC<Iprops> = ({ type, storedValue, setValue }) => {
  const intl = useIntl()
  const inputPlaceholder = intl.formatMessage({ id: 'convert_block_input_placeholder' })
  const selectPlaceholder = intl.formatMessage({ id: 'convert_block_select_placeholder' })
  const dispatch = useDispatch()
  const valueType = useSelector((state: IrootState) => state.values[type || 'primary'].type)
  const valueData = useSelector((state: IrootState) => state.values[type || 'primary'].value)
  const [key]: Array<string> = Object.entries(countries)
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
        selected={key}
        onSelect={(code: string): void => onChangeSelect(countries[code])}
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

Convert.propTypes = {
  setValue: pt.func.isRequired,
  type: pt.string,
  storedValue: pt.array.isRequired,
}

export default Convert
