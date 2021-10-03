import styled from 'styled-components'

import { IRadio } from './index'

type IContainer = Omit<IRadio, 'onClick' | 'testId'>

export const Container = styled.div<IContainer>`
  align-items: center;
  background-color: transparent;
  border: ${(props) =>
    `3px solid ${
      props.active
        ? props.theme.colors.yellow
        : props.theme.colors['light-grey']
    }`};
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  height: ${(props) => props.size}px;
  justify-content: center;
  padding: 2px;
  width: ${(props) => props.size}px;

  &:active {
    filter: brightness(105%);
  }
`

export const Dot = styled.div<IContainer>`
  background-color: ${(props) => props.theme.colors.yellow};
  border-radius: 50%;
  height: ${({ size = 24 }) => size * 0.5}px;
  width: ${({ size = 24 }) => size * 0.5}px;
`
