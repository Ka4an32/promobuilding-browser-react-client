import { combineReducers, createStore } from 'redux'

// REDUCERS
import ConfigReducer from './reducers/configReducer/configReducer'
import PopupReducer from './reducers/popupReducer/popupReducer'

const reducers = combineReducers({
  ConfigReducer,
  PopupReducer,
})

const store = createStore(reducers)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
