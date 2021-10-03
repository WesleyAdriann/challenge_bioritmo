import React from 'react'

import { assignTestId } from '../../../utils'

import * as types from './types'
import { Container } from './styles'

export interface IButton {
  testID?: string
  onClick: () => void
  variation?: types.buttonVariation
  text: string
  uppercase?: boolean
}

export const Button: React.FC<IButton> = ({
  testID = 'Button',
  text,
  variation,
  onClick,
  ...props
}) => (
  <Container
    variation={variation ?? 'normal'}
    onClick={onClick}
    {...props}
    {...assignTestId('button', testID)}
  >
    {text}
  </Container>
)
