import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'

import BaseComponentTestWrapper from '@/components/wrappers/BaseComponentTestWrapper'
import Loader from '@/components/blocks/global/Loader'

import { GOOGLE_MAP_URL } from '@/constants'

import { GoogleMapContainer } from '@/components/blocks/global/GoogleMap/styles'

import GoogleMap from './index'

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

it('GoogleMap is render without crashing', () => {
  render(
    <BaseComponentTestWrapper>
      <GoogleMap
        googleMapURL={GOOGLE_MAP_URL || ''}
        loadingElement={<Loader />}
        containerElement={<GoogleMapContainer />}
        mapElement={<div style={{ height: `100%` }} />}
        initial={{
          center: [0, 0],
          pathOptions: { fillOpacity: 0 },
          minZoom: 2,
          zoom: 5,
          type: 'Leaflet',
        }}
        popupCreator={() => <div>test</div>}
      />
    </BaseComponentTestWrapper>,
    container
  )

  const div = container.querySelectorAll('div')
  expect(div.length).not.toBe(0)
})
