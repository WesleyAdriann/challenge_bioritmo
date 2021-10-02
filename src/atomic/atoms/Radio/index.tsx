import React from 'react'

import { assignTestId } from '../../../utils'

import { Container, Dot } from './styles'

export interface IRadio {
  testID?: string
  active?: boolean
  size?: number
  onClick?: () => void
}

export const Radio: React.FC<IRadio> = ({
  testID = 'Radio',
  active,
  size = 24,
  onClick = () => {},
  ...props
}) => (
  <Container active={!!active} size={size} onClick={onClick} {...props} {...assignTestId('div', testID)}>
    {active && <Dot size={size} {...props}/> }
  </Container>
)
