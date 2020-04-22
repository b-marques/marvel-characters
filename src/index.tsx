import React from 'react'
import ReactDOM from 'react-dom'
import { StylesProvider } from '@material-ui/core/styles'
import { Provider } from 'react-redux'

import store from 'src/store'

import App from './App'

ReactDOM.render(
  <StylesProvider injectFirst>
    <Provider store={store}>
      <App />
    </Provider>
  </StylesProvider>,
  document.getElementById('root'),
)
