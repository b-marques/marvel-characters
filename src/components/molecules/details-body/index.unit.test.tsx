import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, cleanup, screen } from '@testing-library/react'
import DetailsBody from '.'
import { Character } from 'src/store/character/types'

afterEach(cleanup)

const character: Character = {
  id: 0,
  name: 'Marvel Hero',
  image: '',
  description: 'A Fancy hero!',
  series: [
    { id: 0, title: 'Serie1', image: 'image1' },
    { id: 1, title: 'Serie2', image: 'image2' },
    { id: 2, title: 'Serie3', image: 'image3' },
  ],
}

test('should render a details page body with name, description and loader for series', async () => {
  render(<DetailsBody character={character} isLoading={true} />)

  expect(screen.getByText(/nome/i)).toBeTruthy()
  expect(screen.getByText(/descrição/i)).toBeTruthy()
  expect(screen.getByText(character.name)).toBeTruthy()
  expect(screen.getByText(character.description)).toBeTruthy()
  expect(screen.getByTestId(/loader/)).toBeTruthy()
})

test('should render a details page body with name, description and series card list', async () => {
  render(<DetailsBody character={character} isLoading={false} />)

  expect(screen.getByText(/nome/i)).toBeTruthy()
  expect(screen.getByText(/descrição/i)).toBeTruthy()
  expect(screen.getByText(character.name)).toBeTruthy()
  expect(screen.getByText(character.description)).toBeTruthy()
  expect(screen.queryByTestId(/loader/)).toBeNull()
  expect(screen.getByTestId(/card-list-series/)).toBeTruthy()
  expect(screen.getByTestId(/card-list-series/).childElementCount).toBe(3)
  for (let series of character.series) expect(screen.getByText(series.title)).toBeTruthy()
})
