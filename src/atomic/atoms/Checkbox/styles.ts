import styled from 'styled-components'
import { Check } from '../../../assets/Icon'

import { ICheckbox } from './index'

type IContainer = Omit<ICheckbox, 'testID'>

export const Container = styled.div<IContainer>`
  align-items: center;
  background-color: ${({ active, theme }) =>
    active ? theme.colors.yellow : 'transparent'};
  border: ${(props) => `3px solid ${props.theme.colors['light-grey']}`};
  border-radius: 2px;
  cursor: pointer;
  display: flex;
  height: ${(props) => props.size}px;
  justify-content: center;
  padding: 1px;
  width: ${(props) => props.size}px;

  &:active {
    filter: brightness(105%);
  }
`

export const CheckIcon = styled(Check).attrs<ICheckbox>((props) => ({
  color: props.theme.colors.black,
  height: `${props.size}px`,
  width: `${props.size}px`
}))<ICheckbox>``
