import { combineReducers } from '@reduxjs/toolkit'

import locationsReducer from './locations'

import { IRootReducer } from './types'

export const rootReducer = combineReducers<IRootReducer>({
  locationsReducer
})
