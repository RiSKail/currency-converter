import React, { MouseEventHandler, useMemo, useState } from 'react'
import pt from 'prop-types'
import { useIntl } from 'react-intl'

import { IkeyableObj } from '@/types/otherTypes'

import SearchCountryStyle from './styles'

interface Iprops {
  onClickHandleCreator: (el: Record<string, unknown>) => MouseEventHandler<HTMLLIElement>;
  countriesData: IkeyableObj;
}

const SearchCountry: React.FC<Iprops> = ({ countriesData, onClickHandleCreator }) => {
  const intl = useIntl()
  const selectPlaceholder = intl.formatMessage({ id: 'convert_block_select_placeholder' })
  const [inputValue, setInputValue] = useState<string>('')

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(event.target.value.toLowerCase())
  }
  
  const countriesList = useMemo(() => Object.values(countriesData)
    .filter((elem: IkeyableObj) => elem.name.toLowerCase().includes(inputValue))
    .map((el: IkeyableObj) => {
      return (
        <li key={el.name} onClick={onClickHandleCreator(el)}>
          <img src={el.flag} alt={el.name} />{el.name}
        </li>
      )
  }), [countriesData, inputValue])

  return (
    <SearchCountryStyle>
    <input placeholder={selectPlaceholder} value={inputValue} onChange={onChangeInput} />
    <ul>
      {countriesList}
    </ul>
    </SearchCountryStyle>
  )
}

SearchCountry.propTypes = {
  countriesData: pt.object.isRequired,
  onClickHandleCreator: pt.func.isRequired,
}

export default SearchCountry
