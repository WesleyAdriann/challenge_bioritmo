import React from 'react'

import { assignTestId } from '../../../utils'


import {
  Container
} from './styles'

export interface ICard {
  testID?: string
  children: React.ReactNode
  color?: string
  border?: number
  radius?: number
  padding?: number
  shadow?: boolean
}


export const Card: React.FC<ICard> = ({ testID = 'Card', children, ...props }) => (
  <Container  {...props} {...assignTestId('div', testID)}>
    {children}
  </Container>
)
