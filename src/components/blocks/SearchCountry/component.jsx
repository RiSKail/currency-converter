
import React, { useState } from 'react'
import pt from 'prop-types'
import { useIntl } from 'react-intl'
import SearchCountryStyle from './styles'

const SearchCountryBlock = ({ countriesData, onClickHandleCreator }) => {
  const intl = useIntl()
  const selectPlaceholder = intl.formatMessage({ id: 'convert_block_select_placeholder' })
  const [inputValue, setInputValue] = useState('')

  const onChangeInput = ({ target: { value } }) => {
    setInputValue(value.toLowerCase())
  }

  return (
    <SearchCountryStyle>
      <input placeholder={selectPlaceholder} value={inputValue} onChange={onChangeInput} />
      <ul>
        {countriesData && Object.values(countriesData).filter(elem => elem.name.toLowerCase().includes(inputValue)).map((el, index) => {
          return (<li key={index} onClick={onClickHandleCreator(el)} alt={el.name}><img src={el.flag} alt={el.name} />{el.name}</li>)
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
