import { ILocation } from '../../store/slices/gymsLocations/types'

export interface getGymsLocations {
  locations: Omit<ILocation, 'closed'>[]
  current_country_id: number
  wp_total: number
  total: number
  success: boolean
}
