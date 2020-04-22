import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, cleanup, screen, fireEvent } from '@testing-library/react'
import SearchBar from '.'

afterEach(cleanup)

test('should render search bar with input field', async () => {
  render(<SearchBar searchTerm={''} doSearch={() => {}} />)

  fireEvent.change(screen.getByPlaceholderText('Pesquisar personagem...'), {
    target: { value: 'spider' },
  })

  expect(screen.getByPlaceholderText('Pesquisar personagem...')).toBeTruthy()
  expect(screen.getByPlaceholderText('Pesquisar personagem...')).toHaveValue('spider')
  expect(screen.getByTestId(/search-button/)).toBeTruthy()
})
