import { combineReducers } from '@reduxjs/toolkit'

import gymsLocationsReducer from './gymsLocations'

import { IRootReducer } from './types'

export const rootReducer = combineReducers<IRootReducer>({
  gymsLocationsReducer
})
