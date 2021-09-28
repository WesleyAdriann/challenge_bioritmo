import React from 'react'

import { assignTestId } from '../../../utils'

import * as types from './types'
import {
  Component
} from './styles'

export interface IText {
  align: types.TAlign,
  children: React.ReactNode
  testID?: string
  size?: number
  weight?: types.TWeight
}


export const Text: React.FC<IText> = ({ testID = 'Text', children, ...props }) => (
  <Component  {...props} {...assignTestId('text', testID)}>
    {children}
  </Component>
)
