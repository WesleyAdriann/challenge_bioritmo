import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { ILocationsState, ILocation } from './types'

const initialState: ILocationsState = {
  locations: []
}

export const locationsSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    setList: (state, action: PayloadAction<ILocation[]>) => {
      state.locations = action.payload
    }
  }
})

export const { setList } = locationsSlice.actions

export default locationsSlice.reducer
