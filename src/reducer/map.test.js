import React from 'react'
import 'jest-styled-components'

import mapReducer from './map'
import { updateMapOptions } from '@/actions'

const state = {
  center: [0, 0],
  pathOptions: { fillOpacity: 0 },
  minZoom: 2,
  zoom: 5,
}

it('Options should be updated', () => {
  const action = updateMapOptions({ center: [1, 1] })
  const newState = mapReducer(state, action)

  expect(newState.center).toStrictEqual([1, 1])
})
