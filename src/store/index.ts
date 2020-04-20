import { combineReducers, createStore } from 'redux'
import throttle from 'lodash/throttle'

import { systemReducer } from './system/reducers'
import { charactersReducer } from './character/reducers'
import {
  loadStateFromLocalStorage,
  saveStateToLocalStorage,
} from 'src/utils/functions/handleLocalStorage'

const rootReducer = combineReducers({
  system: systemReducer,
  characters: charactersReducer,
})

export type RootState = ReturnType<typeof rootReducer>

const localState = loadStateFromLocalStorage()
const store = createStore(rootReducer, localState)

store.subscribe(
  throttle(() => {
    saveStateToLocalStorage(store.getState())
  }, 1000),
)

export default store
