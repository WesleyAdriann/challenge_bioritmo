import React from 'react';
import { Provider  } from 'react-redux'
import { store } from './store'

import Routes from './pages/Routes'

import { GlobalStyle } from './style/GlobalStyle'

const App = () => (
  <Provider store={store}>
    <GlobalStyle />
    <Routes />
  </Provider>
)

export default App;

