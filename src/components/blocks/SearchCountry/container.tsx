import React, { MouseEventHandler, useMemo, useState } from 'react'
import { useIntl } from 'react-intl'

import { KeyableObj } from '@/types/otherTypes'

import SearchCountryStyle from './styles'

interface Props {
  onClickHandleCreator: (el: Record<string, unknown>) => MouseEventHandler<HTMLLIElement>
  countriesData: KeyableObj
  selectedCountryData: KeyableObj
}

const SearchCountry: React.FC<Props> = ({
  selectedCountryData,
  countriesData,
  onClickHandleCreator,
}) => {
  const intl = useIntl()
  const selectPlaceholder = intl.formatMessage({ id: 'convert_block_select_placeholder' })
  const [inputValue, setInputValue] = useState<string>('')

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(event.target.value.toLowerCase())
  }

  const countriesList = useMemo(
    () =>
      Object.values(countriesData)
        .filter((elem: KeyableObj) => elem.name.toLowerCase().includes(inputValue))
        .map((el: KeyableObj) => {
          return (
            <li
              key={el.name}
              onClick={onClickHandleCreator(el)}
              className={selectedCountryData.name === el.name ? 'is-active' : undefined}
            >
              <img src={el.flag} alt={el.name} />
              {el.name}
            </li>
          )
        }),
    [countriesData, inputValue, selectedCountryData, onClickHandleCreator]
  )

  return (
    <SearchCountryStyle>
      <input placeholder={selectPlaceholder} value={inputValue} onChange={onChangeInput} />
      <ul>{countriesList}</ul>
    </SearchCountryStyle>
  )
}

export default SearchCountry
