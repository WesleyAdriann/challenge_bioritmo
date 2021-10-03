import React from 'react'
import { useTheme } from 'styled-components'
import { useForm, Controller } from 'react-hook-form'

import { Text } from '../../atoms/Text'
import { Card } from '../../atoms/Card'
import { Button } from '../../atoms/Button'
import { ListItem } from '../../molecules/ListItem'

import {
  HourTitleWrapper,
  IconHour,
  ListItemRadio,
  ClosedUnitsAndResultsWrapper,
  ButtonsWrapper
} from './styles'
export interface IFormSelectHour {
  testID?: string
  onSubmit: (form: IFormSelectHourInputs) => void
  onClear: () => void
  quantity: number
}

const hours = {
  nothing: (() => {
    const start = new Date(0)
    const end = new Date(0)
    start.setHours(0)
    end.setHours(24)
    return [start, end]
  })(),
  morning: (() => {
    const start = new Date(0)
    const end = new Date(0)
    start.setHours(6)
    end.setHours(12)
    return [start, end]
  })(),
  afternoon: (() => {
    const start = new Date(0)
    const end = new Date(0)
    start.setHours(12)
    start.setMinutes(1)
    end.setHours(18)
    return [start, end]
  })(),
  night: (() => {
    const start = new Date(0)
    const end = new Date(0)
    start.setHours(18)
    start.setMinutes(1)
    end.setHours(23)
    return [start, end]
  })()
}

export interface IFormSelectHourInputs {
  hour: Date[]
  showClosed: boolean
}

const defaultValues: IFormSelectHourInputs = {
  hour: hours.nothing,
  showClosed: false
}

export const FormSelectHour: React.FC<IFormSelectHour> = ({
  testID = 'FormSelectHour',
  onSubmit = () => {},
  onClear = () => {},
  quantity = 0,
  ...props
}) => {
  const theme = useTheme()
  const { control, handleSubmit, reset } = useForm<IFormSelectHourInputs>({
    defaultValues
  })

  const onSubmitPress = handleSubmit(onSubmit)

  return (
    <Card
      color={theme.colors.white}
      border={4}
      radius={8}
      padding={16}
      testID={testID}
      {...props}
    >
      <HourTitleWrapper>
        <IconHour />
        <Text>Horário</Text>
      </HourTitleWrapper>
      <ListItem text='Qual período quer treinar?' marginBottom={16} />
      <Controller
        name='hour'
        control={control}
        render={({ field }) => (
          <>
            <ListItemRadio
              text='Manhã'
              rightText='06:00 às 12:00'
              onClick={() => field.onChange(hours.morning)}
              active={
                field?.value?.[0].getHours() === hours.morning[0].getHours()
              }
            />
            <ListItemRadio
              text='Tarde'
              rightText='12:01 às 18:00'
              onClick={() => field.onChange(hours.afternoon)}
              active={
                field?.value?.[0].getHours() === hours.afternoon[0].getHours()
              }
            />
            <ListItemRadio
              text='Noite'
              rightText='18:01 às 23:00'
              onClick={() => field.onChange(hours.night)}
              active={
                field?.value?.[0].getHours() === hours.night[0].getHours()
              }
              marginBottom={16}
            />
          </>
        )}
      />

      <ClosedUnitsAndResultsWrapper>
        <Controller
          name='showClosed'
          control={control}
          render={({ field }) => (
            <ListItem
              text='Exibir unidades fechadas'
              withCheckbox
              checkboxProps={{ size: 20 }}
              withBottomLine={false}
              active={field.value}
              onClick={() => field.onChange(!field.value)}
            />
          )}
        />
        <Text align='center'>
          Resultados encontrados:{' '}
          <Text weight='bold' size={20} newLine={false}>
            {quantity}
          </Text>
        </Text>
      </ClosedUnitsAndResultsWrapper>
      <ButtonsWrapper>
        <Button text='Encontrar unidade' onClick={onSubmitPress} uppercase />
        <Button
          text='Limpar'
          onClick={() => {
            reset(defaultValues)
            onClear()
          }}
          variation='outlined'
          uppercase
        />
      </ButtonsWrapper>
    </Card>
  )
}
