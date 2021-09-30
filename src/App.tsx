import React from 'react';
import { Provider  } from 'react-redux'
import { store } from './store'
import { ThemeProvider } from 'styled-components'

import Routes from './pages/Routes'

import { GlobalStyle } from './style'
import { theme } from './tokens'

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Routes />
    </ThemeProvider>
  </Provider>
)

export default App;

