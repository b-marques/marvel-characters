import {
  Character,
  Series,
  FETCH_CHARACTERS,
  LOAD_MORE_CHARACTERS,
  FETCH_CHARACTER_SERIES,
  EDIT_CHARACTER,
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

export function editCharacter(character: Character): CharacterActionTypes {
  return {
    type: EDIT_CHARACTER,
    payload: character,
  }
}
