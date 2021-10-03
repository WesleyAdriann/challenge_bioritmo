import styled from 'styled-components'

import { buttonVariation } from './types'

interface IContainer {
  variation: buttonVariation
  uppercase?: boolean
}

export const Container = styled.div<IContainer>`
  background-color: ${({ variation, theme }) =>
    variation === 'normal' ? theme.colors.yellow : theme.colors.white};
  border-radius: 4px;
  border-color: ${({ variation, theme }) =>
    variation === 'normal' ? theme.colors.yellow : theme.colors['light-grey']};
  border-width: 1px;
  border-style: solid;
  cursor: pointer;
  font-weight: bold;
  padding: 12px;
  text-align: center;
  text-transform: ${({ uppercase }) => (uppercase ? 'uppercase' : 'normal')};
  user-select: none;
  word-wrap: break-word;

  &:active {
    filter: brightness(95%);
  }
`
