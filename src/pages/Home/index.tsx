import React, { useEffect, useCallback } from 'react'

import { useAppSelector, useAppDispatch } from '../../store'
import {
  setLocations,
  setFilteredLocations
} from '../../store/slices/gymsLocations'

import { HomeTemplate, IFormSelectHourInputs } from '../../atomic'

import { getGymsLocations } from '../../services/gymsLocations'

export const Home = () => {
  const dispatch = useAppDispatch()
  const gymsLocations = useAppSelector((state) => state.gymsLocationsReducer)

  const formatHour = (hour: string): string[] => {
    const numbers = hour.replace(/\D/g, '')
    if (numbers.length < 4) return ['']

    const start = new Date(0)
    const end = new Date(0)
    if (numbers.length === 8) {
      start.setHours(parseInt(numbers.substr(0, 2)))
      start.setMinutes(parseInt(numbers.substr(2, 4)))
      end.setHours(parseInt(numbers.substr(4, 6)))
      end.setMinutes(parseInt(numbers.substr(4)))
    } else {
      start.setHours(parseInt(numbers.substr(0, 2)))
      end.setHours(parseInt(numbers.substr(2)))
    }
    return [start.toISOString(), end.toISOString()]
  }

  const getLocations = useCallback(async () => {
    try {
      const response = await getGymsLocations()
      const gyms = response.data.locations.map((gym) => ({
        ...gym,
        opened: gym.opened ?? false,
        title: gym.title.replace(/((D)?&#+[\d])/gi, ' '),
        content:
          gym.content?.replace(/(<([^>]+)>)|(\n)|((D)?&#+[\d])/gi, ' ') ??
          `${gym.street}, ${gym.region} - ${gym.city_name}, ${gym.uf} `,
        schedules: gym?.schedules?.map((shedule) => ({
          ...shedule,
          hourDate: gym.opened ? formatHour(shedule.hour) : ['']
        }))
      }))
      console.log(gyms)
      dispatch(setLocations(gyms))
    } catch (error) {
      console.log('Error to get gyms', error)
    }
  }, [dispatch])

  const onSubmit = (form: IFormSelectHourInputs) => {
    const gyms = gymsLocations.locations.filter((location) => {
      if (form.showClosed && !location.opened) return true
      let passInFilter = false
      passInFilter =
        location.schedules?.some((shecule) => {
          if (shecule.hourDate?.length === 1) return false
          const start = new Date(shecule.hourDate?.[0] ?? 0)
          const end = new Date(shecule.hourDate?.[1] ?? 0)

          if (start >= form.hour[0] || end <= form.hour[1]) return true

          return false
        }) ?? false
      return passInFilter
    })
    console.log(gyms)
    dispatch(setFilteredLocations(gyms))
  }

  const onClear = () => {
    dispatch(setFilteredLocations([]))
  }

  useEffect(() => {
    if (!gymsLocations.locations.length) getLocations()
  }, [getLocations, gymsLocations.locations.length])

  return (
    <HomeTemplate
      form={{ onSubmit, onClear }}
      locations={gymsLocations.filteredLocations}
      isSearch={gymsLocations.isSearch}
    />
  )
}
