import styled from 'styled-components'

import { IText } from './index'

type IComponent = Omit<IText, 'children'>

export const Component = styled.p<IComponent>`
  color: ${({ color, theme }) => color ?? theme.fontColor};
  font-weight: ${(props) => props.weight ?? '400'};
  font-size: ${({ size, theme }) => size ?? theme.fontSize}px;
  text-align: ${(props) => props.align ?? 'left'};
  text-transform: ${(props) => (props.uppercase ? 'uppercase' : 'none')};
  user-select: ${(props) => (props.selectable ? 'initial' : 'none')};
  display: ${(props) => (props.newLine ? 'block' : 'inline')};
  line-height: ${(props) => props.lineHeight ?? 'normal'};
`
