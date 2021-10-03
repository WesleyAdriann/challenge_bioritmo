import styled from 'styled-components'

import { IButton } from './index'

type IContainer = Omit<IButton, 'onClick' | 'text'>

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
  flex: 1;

  &:active {
    filter: brightness(95%);
  }
`
