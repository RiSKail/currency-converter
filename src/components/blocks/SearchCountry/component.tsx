
import React, { useState, ReactNode } from 'react'
import pt from 'prop-types'
import { useIntl } from 'react-intl'
import SearchCountryStyle from './styles'
import { IKeyableObj } from '@/types/otherTypes'
interface IProps {
  onClickHandleCreator: (el: Object) => any,
  countriesData: Object,
  children?: ReactNode,
  props?: any
}

const SearchCountryBlock: React.FC<IProps> = ({ countriesData, onClickHandleCreator }) => {
  const intl = useIntl()
  const selectPlaceholder = intl.formatMessage({ id: 'convert_block_select_placeholder' })
  const [inputValue, setInputValue] = useState<string>('')

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value.toLowerCase())
  }

  return (
    <SearchCountryStyle>
      <input placeholder={selectPlaceholder} value={inputValue} onChange={onChangeInput} />
      <ul>
        {countriesData && Object.values(countriesData)
          .filter((elem: IKeyableObj) => elem.name.toLowerCase().includes(inputValue))
          .map((el: IKeyableObj, index: number) => {
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
