import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import 'jest-styled-components'
import BaseComponentTestWrapper from '@/components/wrappers/BaseComponentTestWrapper'
import SearchCountry from './container'

let container = null

beforeEach(() => {
  container = document.createElement('div')
  document.body.appendChild(container)
})

afterEach(() => {
  unmountComponentAtNode(container)
  container.remove()
  container = null
})

describe('SearchCountry tests', () => {
  it('SearchCountry is render with props', () => {
    render(
      <BaseComponentTestWrapper>
        <SearchCountry
          onClickHandleCreator={(e) => console.log(e)}
          countriesData={{
            0: {
              currencies: [
                {
                  code: 'AFN',
                  name: 'Afghan afghani',
                  symbol: '؋',
                },
              ],
              flag: 'https://restcountries.eu/data/afg.svg',
              name: 'Afghanistan',
              alpha3Code: 'AFG',
              latlng: [
                33,
                65,
              ],
            }
          }} />
      </BaseComponentTestWrapper>,
      container
    )
  })

  it('SearchCountry is render without props', () => {
    render(
      <BaseComponentTestWrapper>
        <SearchCountry />
      </BaseComponentTestWrapper>,
      container
    )
  })
})
