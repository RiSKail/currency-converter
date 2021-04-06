import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import 'jest-styled-components'
import mapData from '@/data/countries.json'
import BaseComponentTestWrapper from '@/components/wrappers/BaseComponentTestWrapper'
import Map from './container'

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

describe('Map tests', () => {
  it('Map is render without currentCountryData', () => {
    render(
      <BaseComponentTestWrapper>
        <Map mapData={mapData} />
      </BaseComponentTestWrapper>,
      container
    )
  })

  it('Map is render with currentCountryData', () => {
    render(
      <BaseComponentTestWrapper>
        <Map
          mapData={mapData}
          currentCountryData={{
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
          }} />
      </BaseComponentTestWrapper>,
      container
    )
  })
})
