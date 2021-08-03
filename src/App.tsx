import React from 'react';
import { Provider  } from 'react-redux'
import { store } from './store'

import Routes from './pages/Routes'

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
)

export default App;

