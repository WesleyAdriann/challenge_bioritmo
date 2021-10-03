type TMaskTowel = 'required' | 'recommended'

type TSchedule = {
  weekdays: string
  hour: string
  hourDate?: string[]
}

export interface ILocation {
  id: number
  title: string
  content?: string
  opened: boolean
  mask?: TMaskTowel
  towel?: TMaskTowel
  fountain?: 'partial' | 'not_allowed'
  locker_room?: 'allowed' | 'closed' | 'partial'
  schedules?: TSchedule[]
  city_name?: string
  region?: string
  state_name?: string
  street?: string
  uf?: string
}

export interface IGymsLocationsState {
  locations: ILocation[]
  filteredLocations: ILocation[]
  isSearch: boolean
}
