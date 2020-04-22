import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, cleanup, screen } from '@testing-library/react'
import SeriesCardList from '.'

afterEach(cleanup)

const seriesArray = [
  { id: 0, title: 'Card1', image: 'card1-image' },
  { id: 1, title: 'Card2', image: 'card2-image' },
  { id: 2, title: 'Card3', image: 'card3-image' },
  { id: 3, title: 'Card4', image: 'card4-image' },
]

test('should render series card with title', async () => {
  render(<SeriesCardList seriesArray={seriesArray} />)

  for (let series of seriesArray) expect(screen.getByText(series.title)).toBeTruthy()
  expect(screen.getByTestId(/card-list/).childElementCount).toBe(seriesArray.length)
})
