import React, { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '@/theme/GlobalStyle'
import theme from '@/theme'

interface Props {
  children: ReactNode
}

const ThemeProviderWrapper: React.FC<Props> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      {children}
    </>
  </ThemeProvider>
)

export default ThemeProviderWrapper
