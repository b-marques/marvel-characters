import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, cleanup, screen } from '@testing-library/react'
import Card from '.'
import { Character } from 'src/store/character/types'

afterEach(cleanup)

const character: Character = {
  id: 0,
  name: 'Marvel Hero!',
  image: '',
  description: 'A fancy Marvel Hero!',
  series: [],
}

test('should render a card with image and title', async () => {
  render(
    <Card
      title={character.name}
      image={character.image}
      ariaLabel="Personagem"
      onClick={() => {}}
    />,
  )

  expect(screen.getByText(character.name)).toBeTruthy()
})
