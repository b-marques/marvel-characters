import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, cleanup, screen, fireEvent } from '@testing-library/react'
import EditFields from '.'
import { Character } from 'src/store/character/types'
import { Provider } from 'react-redux'
import store from 'src/store'

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

test('should render edit fields and should be editable', async () => {
  render(
    <Provider store={store}>
      <EditFields character={character} />
    </Provider>,
  )

  fireEvent.change(screen.getByTestId(/character-name/), { target: { value: 'Marvel 22' } })
  fireEvent.change(screen.getByTestId(/character-image/), { target: { value: 'no image' } })
  fireEvent.change(screen.getByTestId(/character-description/), { target: { value: 'no descrip' } })

  expect(screen.getByTestId(/character-id/)).toBeDisabled()
  expect(screen.getByTestId(/character-name/)).toHaveValue('Marvel 22')
  expect(screen.getByTestId(/character-image/)).toHaveValue('no image')
  expect(screen.getByTestId(/character-description/)).toHaveValue('no descrip')
  expect(screen.getByText(/ID do Personagem/)).toBeTruthy()
  expect(screen.getByText(/Nome do Personagem/)).toBeTruthy()
  expect(screen.getByText(/Imagem do Personagem/)).toBeTruthy()
  expect(screen.getByText(/Descrição do Personagem/)).toBeTruthy()
})
