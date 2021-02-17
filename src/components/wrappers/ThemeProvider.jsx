import React from 'react'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '@/theme/GlobalStyle'
import theme from '@/theme'
import { childrenPropType } from '@/prop-types'

const ThemeProviderWrapper = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      {children}
    </>
  </ThemeProvider>
)

ThemeProviderWrapper.propTypes = {
  children: childrenPropType,
}

export default ThemeProviderWrapper
