import React from 'react'
import { render } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import 'jest-styled-components'

import App from './App'

it('App is render without crashing', () => {
  render(<App />)
})
