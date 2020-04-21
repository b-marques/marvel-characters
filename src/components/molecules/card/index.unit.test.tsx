import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, cleanup, screen } from '@testing-library/react'
import Card from '.'

afterEach(cleanup)

const card = {
  title: 'Marvel Hero!',
  image: '',
}

test('should render a card with image and title', async () => {
  render(<Card title={card.title} image={card.image} ariaLabel="personagem" onClick={() => {}} />)

  expect(screen.getByText(card.title)).toBeTruthy()
})
