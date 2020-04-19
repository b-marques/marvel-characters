import {
  CharacterState,
  CharacterActionTypes,
  FETCH_CHARACTERS,
  LOAD_MORE_CHARACTERS,
  FETCH_CHARACTER_SERIES,
} from './types'

const initialState: CharacterState = []

export function charactersReducer(
  state = initialState,
  action: CharacterActionTypes,
): CharacterState {
  switch (action.type) {
    case FETCH_CHARACTERS:
      return action.payload

    case LOAD_MORE_CHARACTERS:
      return [...state, ...action.payload]

    case FETCH_CHARACTER_SERIES:
      let newState = [...state]
      let index = newState.findIndex(item => item.id === action.payload.characterId)
      newState[index].series = [...action.payload.series]
      return newState

    default:
      return state
  }
}
