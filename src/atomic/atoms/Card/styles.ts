import styled from 'styled-components'

import { ICard } from './index'

type IContainer = Omit<ICard, 'children'>

export const Container = styled.div<IContainer>`
  background-color: ${({ theme, color }) =>
    color ?? theme.colors['lightest-grey']};
  border-radius: ${(props) => props.radius ?? 0}px;
  box-shadow: ${(props) =>
    props.shadow ? '0px 0px 10px 1px rgba(0,0,0,0.1)' : '0px'};
  border: ${({ border, theme }) =>
    `${border ?? 0}px solid ${theme.colors['lightest-grey']}`};
  padding: ${(props) => props.padding ?? 0}px;
`
