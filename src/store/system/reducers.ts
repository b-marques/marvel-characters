import { SystemState, SystemActionTypes, UPDATE_PAGE } from './types'

const initialState: SystemState = {
  page: 1,
  limit: 48,
}

export function systemReducer(state = initialState, action: SystemActionTypes): SystemState {
  switch (action.type) {
    case UPDATE_PAGE: {
      return {
        ...state,
        page: action.payload,
      }
    }
    default:
      return state
  }
}
