import { UPDATE_PAGE, SystemActionTypes } from './types'

export function updatePage(newPage: number): SystemActionTypes {
  return {
    type: UPDATE_PAGE,
    payload: newPage,
  }
}
