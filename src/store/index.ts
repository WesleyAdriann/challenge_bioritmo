import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import { RootReducer } from './slices'

export const store = configureStore({
  reducer: RootReducer,

  devTools: process.env.NODE_ENV !== 'production'
})

export type IRootState = ReturnType<typeof RootReducer>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector
