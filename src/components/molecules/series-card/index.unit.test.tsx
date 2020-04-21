import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, cleanup, screen } from '@testing-library/react'
import SeriesCard from '.'
import { Series } from 'src/store/character/types'

afterEach(cleanup)

const series: Series = { id: 0, title: 'Serie1', image: 'image1' }

test('should render series card with title', async () => {
  render(<SeriesCard series={series} />)

  expect(screen.getByText(series.title)).toBeTruthy()
  expect(screen.getByTestId(/expand-more-button/)).toBeTruthy()
})
