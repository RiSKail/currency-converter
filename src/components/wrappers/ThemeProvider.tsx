import React from 'react'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '@/theme/GlobalStyle'
import theme from '@/theme'
import { childrenPropType } from '@/prop-types'

interface IProps {
  children?: any,
  props?: any
}

const ThemeProviderWrapper: React.FC<IProps> = ({ children }) => (
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
