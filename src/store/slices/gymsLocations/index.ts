import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { IGymsLocationsState, ILocation } from './types'

const initialState: IGymsLocationsState = {
  locations: [],
  filteredLocations: [],
  isSearch: false
}

export const gymsLocationsSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    setLocations: (state, action: PayloadAction<ILocation[]>) => ({
      ...state,
      locations: action.payload
    }),
    setFilteredLocations: (state, action: PayloadAction<ILocation[]>) => ({
      ...state,
      filteredLocations: action.payload,
      isSearch: true
    })
  }
})

export const { setLocations, setFilteredLocations } = gymsLocationsSlice.actions

export default gymsLocationsSlice.reducer
