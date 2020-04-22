import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, cleanup, screen } from '@testing-library/react'
import Error from '.'

afterEach(cleanup)

test('should render error message', async () => {
  render(<Error />)

  expect(screen.getByText('Algo deu errado!')).toBeTruthy()
})
