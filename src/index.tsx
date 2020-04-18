import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { StylesProvider } from '@material-ui/core/styles'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <StylesProvider injectFirst>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StylesProvider>,
  document.getElementById('root'),
)
