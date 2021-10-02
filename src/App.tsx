import React from 'react'
import { Provider } from 'react-redux'
import { store } from './store'
import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from './style'
import { theme } from './tokens'

import { Home } from './pages/Home'

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Home />
    </ThemeProvider>
  </Provider>
)

export default App
