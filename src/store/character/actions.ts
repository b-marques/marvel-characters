import {
  Character,
  Series,
  FETCH_CHARACTERS,
  LOAD_MORE_CHARACTERS,
  FETCH_CHARACTER_SERIES,
  CharacterActionTypes,
} from './types'

export function fetchCharacters(characters: Character[]): CharacterActionTypes {
  return {
    type: FETCH_CHARACTERS,
    payload: characters,
  }
}

export function loadMoreCharacters(characters: Character[]): CharacterActionTypes {
  return {
    type: LOAD_MORE_CHARACTERS,
    payload: characters,
  }
}

export function fetchCharacterSeries(characterId: number, series: Series[]): CharacterActionTypes {
  return {
    type: FETCH_CHARACTER_SERIES,
    payload: { characterId, series },
  }
}
