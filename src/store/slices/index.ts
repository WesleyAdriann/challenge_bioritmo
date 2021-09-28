import { combineReducers } from '@reduxjs/toolkit'

import gymsLocationsReducer from './gymsLocations'

import { IRootReducer } from './types'

export const RootReducer = combineReducers<IRootReducer>({
  gymsLocationsReducer
})
