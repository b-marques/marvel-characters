import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, cleanup, screen } from '@testing-library/react'
import DetailsHeader from '.'
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

test('should render a details page header with navigation and edit buttons', async () => {
  render(
    <DetailsHeader character={character} handleNavigateBack={() => {}} handleEdit={() => {}} />,
  )

  expect(screen.getByTestId(/navigate-back-button/)).toBeTruthy()
  expect(screen.getByTestId(/edit-button/)).toBeTruthy()
})
