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

const responseData = require('src/utils/files/characaters-fetch-data-example.json')

test('can render app with redux with defaults', async () => {
  mockedAxios.get.mockResolvedValue(responseData)
  render(
    <Provider store={store}>
      <App />
    </Provider>,
  )

  await waitFor(() => screen.getByTestId('cards-container'), { timeout: 10000 })

  expect(mockedAxios.get).toHaveBeenCalledTimes(1)
  expect(screen.getByTestId('cards-container')).toBeTruthy()
  expect(screen.getByTestId('cards-container')).toContainElement(
    screen.getByTestId('cards-list-characters'),
  )
  expect(screen.getByTestId('cards-list-characters').childElementCount).toBe(48)
  expect(screen.getByTestId('search-bar')).toBeTruthy()
}, 10000)

test('can render loader with redux with defaults', async () => {
  mockedAxios.get.mockResolvedValue(responseData)
  render(
    <Provider store={store}>
      <App />
    </Provider>,
  )

  const loader = await screen.findByTestId('loader')

  expect(loader).toHaveTextContent('Carregando...')
  expect(screen.getByTestId('search-bar')).toBeTruthy()
})

test('can render error with redux with defaults', async () => {
  mockedAxios.get.mockResolvedValue('invalid-data')
  render(
    <Provider store={store}>
      <App />
    </Provider>,
  )

  const error = await screen.findByTestId('error-message')

  expect(error).toBeTruthy()
  expect(screen.getByTestId('search-bar')).toBeTruthy()
  expect(screen.getByTestId('error-message')).toBeTruthy()
})
