type TMaskTowel = 'required' | 'recommended'

type TSchedule = {
  weekdays: string
  hour: string
}

export interface ILocation {
  id: number
  title: string
  content: string
  opened: boolean
  mask: TMaskTowel
  towel: TMaskTowel
  fountain: 'partial' | 'not_allowed'
  locker_room: 'allowed' | 'closed' | 'partial',
  schedules: TSchedule[]
}

export interface ILocationsState {
  locations: ILocation[]
}
