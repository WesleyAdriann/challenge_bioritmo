import React from 'react'

import { assignTestId } from '../../../utils'

import * as types from './types'
import { Component } from './styles'

export interface IText {
  align?: types.TAlign
  children: React.ReactNode
  color?: string
  testID?: string
  size?: number
  uppercase?: boolean
  weight?: types.TWeight
  selectable?: boolean
  lineHeight?: number
  newLine?: boolean
}

export const Text: React.FC<IText> = ({
  testID = 'Text',
  selectable = true,
  newLine = true,
  children,
  ...props
}) => (
  <Component
    selectable={selectable}
    newLine={newLine}
    as={newLine ? 'p' : 'span'}
    {...props}
    {...assignTestId('text', testID)}
  >
    {children}
  </Component>
)
