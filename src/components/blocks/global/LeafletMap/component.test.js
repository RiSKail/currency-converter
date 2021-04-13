import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'

import BaseComponentTestWrapper from '@/components/wrappers/BaseComponentTestWrapper'
import mapData from '@/data/countries.json'

import { nop } from '@/utils/other'

import LeafletMap from './index'

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

it('LeafletMap is render without crashing', () => {
  render(
    <BaseComponentTestWrapper>
      <LeafletMap
        initial={{
          center: [0, 0],
          pathOptions: { fillOpacity: 0 },
          minZoom: 2,
          zoom: 5,
          type: 'Leaflet',
        }}
        popupCreator={() => <div>test</div>}
        onEachFeature={nop}
        mapData={mapData}
      />
    </BaseComponentTestWrapper>,
    container
  )

  const div = container.querySelectorAll('div')
  expect(div.length).not.toBe(0)
})