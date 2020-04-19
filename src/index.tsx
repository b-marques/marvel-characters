import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { StylesProvider } from '@material-ui/core/styles'
import { Provider } from 'react-redux'

import store from 'src/store'

import App from './App'

ReactDOM.render(
  <StylesProvider injectFirst>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </StylesProvider>,
  document.getElementById('root'),
)
