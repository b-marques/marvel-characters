import { combineReducers, createStore } from 'redux'
import { systemReducer } from './system/reducers'
import { charactersReducer } from './character/reducers'

const rootReducer = combineReducers({
  system: systemReducer,
  characters: charactersReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default createStore(rootReducer)
