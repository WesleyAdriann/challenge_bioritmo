import styled from 'styled-components'


import { IRadio } from './index'

type IContainer = Omit<IRadio, 'onClick' | 'testId'>

export const Container = styled.div<IContainer>`
  align-items: center;
  background-color: ${({ active, theme }) => active ? theme.colors.yellow : 'transparent'};
  border: ${(props) => `3px solid ${props.theme.colors['light-grey']}`};
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
  background-color: ${(props) => props.theme.colors.black};
  border-radius: 50%;
  height: ${(props) => props.size * 0.5}px;
  width: ${(props) => props.size * 0.5}px;
`
