
import React from 'react'

import { ThemeProvider } from 'styled-components'

import { theme } from '../style'

export const StorybookProviders: React.FC = ({
  children,
}) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
)
