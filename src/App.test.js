import React from 'react'
import { render } from '@testing-library/react'
import 'jest-styled-components'

import App from './App'

it('App is render without crashing', () => {
  render(<App />)
})
