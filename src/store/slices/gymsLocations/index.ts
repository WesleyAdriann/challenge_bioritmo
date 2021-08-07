import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { IGymsLocationsState, ILocation } from './types'

const initialState: IGymsLocationsState = {
  locations: []
}

export const gymsLocationsSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    setLocations: (state, action: PayloadAction<ILocation[]>) => {
      state.locations = action.payload
    }
  }
})

export const { setLocations } = gymsLocationsSlice.actions

export default gymsLocationsSlice.reducer
