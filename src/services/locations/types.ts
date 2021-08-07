import { ILocation } from '../../store/slices/locations/types'

export interface getLocationsResponse {
  locations: ILocation[]
  current_country_id: number
  wp_total: number
  total: number
  success: boolean
}
