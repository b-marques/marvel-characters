import React from 'react'
import { render, cleanup, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import axios from 'axios'
import { Provider } from 'react-redux'
import store from 'src/store'
import App from 'src/App'

const mockedAxios = axios as jest.Mocked<typeof axios>

afterEach(cleanup)
jest.mock('axios')

const responseData = require('src/__tests__/characaters-fetch.json')

test('can render app with redux with defaults', async () => {
  mockedAxios.get.mockResolvedValue(responseData)
  render(
    <Provider store={store}>
      <App />
    </Provider>,
  )

  await waitFor(() => screen.getByTestId('cards-container'), { timeout: 10000 })
  expect(screen.getByTestId('cards-container')).toBeTruthy()
  expect(screen.getByTestId('cards-container')).toBeTruthy()
}, 10000)

test('can render loader with redux with defaults', async () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
  )
  const loader = await screen.findByTestId('loader')
  expect(loader).toHaveTextContent('Carregando...')
})

// test('can fetch first 48 characters', async () => {
//   render(
//     <Provider store={store}>
//       <App />
//     </Provider>,
//   )

//   waitForElementToBeRemoved(null).catch(err => console.log(err))
// })
