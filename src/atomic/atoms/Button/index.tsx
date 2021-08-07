import React from 'react'

import * as types from './types'
import {
  Container
} from './styles'

interface IButton {
  onClick: () => void
  variation?: types.buttonVariation
  text: string
  uppercase?: boolean
}


export const Button: React.FC<IButton> = ({ text, variation, onClick }) => (
  <Container variation={variation ?? 'normal'} onClick={onClick}>
    {text}
  </Container>
)
