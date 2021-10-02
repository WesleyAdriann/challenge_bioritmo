import React from 'react'

import { assignTestId } from '../../../utils'

import {
  Container,
  CheckIcon
} from './styles'

export interface ICheckbox {
  testID?: string
  active?: boolean
  size?: number
  onClick?: () => void
}

export const Checkbox: React.FC<ICheckbox> = ({ testID = 'Checkbox', active, size = 24, onClick  = () => {}, ...props }) => (
  <Container active={!!active} size={size} {...props} {...assignTestId('div', testID)} onClick={onClick}>
    {active && <CheckIcon size={size} {...props}/> }
  </Container>
)
