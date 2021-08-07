import axios, { AxiosPromise } from 'axios'

import {apiAddress} from '../apiAddress'

import * as types from './types'

const { locations: locationsConfig } = apiAddress

const api = axios.create({
  baseURL: locationsConfig.baseUrl
})

export const getLocations = (): AxiosPromise<types.getLocationsResponse> => {
  const { locations } = locationsConfig

  return api.get(locations)
}
