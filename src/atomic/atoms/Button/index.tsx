import React from 'react'

import * as types from './types'
import {
  Container
} from './styles'

export interface IButton {
  onClick: () => void
  variation?: types.buttonVariation
  text: string
  uppercase?: boolean
}


export const Button: React.FC<IButton> = ({ text, variation, onClick, ...props }) => (
  <Container variation={variation ?? 'normal'} onClick={onClick} {...props}>
    {text}
  </Container>
)
