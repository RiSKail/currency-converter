
import React, { useState } from 'react'
import pt from 'prop-types'
import { useIntl } from 'react-intl'
import SearchCountryStyle from './styles'

interface IProps {
  onClickHandleCreator: any,
  countriesData: any,
  children?: any,
  props?: any
}

const SearchCountryBlock = ({ countriesData, onClickHandleCreator }: IProps) => {
  const intl = useIntl()
  const selectPlaceholder = intl.formatMessage({ id: 'convert_block_select_placeholder' })
  const [inputValue, setInputValue] = useState('')

  const onChangeInput = ({ target: { value } }: {target: any}) => {
    setInputValue(value.toLowerCase())
  }

  return (
    <SearchCountryStyle>
      <input placeholder={selectPlaceholder} value={inputValue} onChange={onChangeInput} />
      <ul>
        {countriesData && Object.values(countriesData)
          .filter((elem: any) => elem.name.toLowerCase().includes(inputValue))
          .map((el: any, index: number) => {
            return (
              <li key={index} onClick={onClickHandleCreator(el)}>
                <img src={el.flag} alt={el.name} />{el.name}
              </li>
            )
          })}
      </ul>
    </SearchCountryStyle>
  )
}

SearchCountryBlock.propTypes = {
  countriesData: pt.object.isRequired,
  onClickHandleCreator: pt.func.isRequired,
}

export default SearchCountryBlock
