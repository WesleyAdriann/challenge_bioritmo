import axios, { AxiosPromise } from 'axios'

import {apiAddress} from '../apiAddress'

import * as types from './types'

const { gyms: gymsConfig } = apiAddress

const api = axios.create({
  baseURL: gymsConfig.baseUrl
})

export const getGymsLocations = (): AxiosPromise<types.getGymsLocations> => {
  const { locations } = gymsConfig

  return api.get(locations)
}
