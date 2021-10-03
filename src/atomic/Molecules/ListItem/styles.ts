import styled from 'styled-components'

import { IContainer } from './types'

export const Container = styled.div<IContainer>`
  display: flex;
  border-bottom: 1px solid ${(props) => props.theme.colors['lightest-grey']};
  padding: 8px 0;
  cursor: ${(props) => (props.isClickable ? 'cursor' : 'initial')};

  ${(props) =>
    props.isClickable
      ? `
    &:active {
      filter: brightness(105%);
    }`
      : ''}
`

export const TextWrapper = styled.div`
  align-items: center;
  display: flex;
  gap: 8px;
  flex-grow: 1;
`
