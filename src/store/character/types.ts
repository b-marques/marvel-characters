export type Series = {
  id: number
  title: string
  image: string
}

export type Character = {
  id: number
  name: string
  image: string
  series: Series[]
}

export type CharacterState = Character[]

/* Character Actions Constants */
export const FETCH_CHARACTERS = 'FETCH_CHARACTERS'
export const LOAD_MORE_CHARACTERS = 'LOAD_MORE_CHARACTERS'
export const FETCH_CHARACTER_SERIES = 'FETCH_CHARACTER_SERIES'

/* Character Actions Shapes */
type FetchCharactersAction = {
  type: typeof FETCH_CHARACTERS
  payload: Character[]
}

type LoadMoreCharacters = {
  type: typeof LOAD_MORE_CHARACTERS
  payload: Character[]
}

type FetchCaracterSeriesPayload = {
  characterId: number
  series: Series[]
}

type FetchCharacterSeriesAction = {
  type: typeof FETCH_CHARACTER_SERIES
  payload: FetchCaracterSeriesPayload
}

export type CharacterActionTypes =
  | FetchCharactersAction
  | LoadMoreCharacters
  | FetchCharacterSeriesAction
