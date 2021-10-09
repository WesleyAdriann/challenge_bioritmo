import styled from 'styled-components'

import { Div } from '../../atoms/Div'

import { IContainer } from './types'

export const Container = styled(Div)<IContainer>`
  align-items: center;
  display: flex;
  border-bottom: 1px solid
    ${(props) =>
      props.withBottomLine
        ? props.theme.colors['lightest-grey']
        : 'transparent'};
  cursor: ${(props) => (props.isClickable ? 'pointer' : 'initial')};
  margin-bottom: ${(props) => props.marginBottom ?? 0}px;
  padding: 8px 0;

  ${(props) =>
    props.isClickable
      ? `
    &:active {
      filter: brightness(105%);
    }`
      : ''}
`

export const TextWrapper = styled(Div)`
  align-items: center;
  display: flex;
  gap: 8px;
  flex-grow: 1;
`
