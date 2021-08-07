import styled from 'styled-components'

import {
  buttonVariation
} from './types'

interface IContainer {
  variation: buttonVariation
  uppercase?: boolean
}

export const Container = styled.div<IContainer>`
  background-color: ${({ variation }) => variation === 'normal' ? '#ffb610' : '#fff'};
  border-radius: 4px;
  border-color: ${({ variation }) => variation === 'normal' ? '#ffb610' : '#cfcfcf'};
  border-width: 4px;
  border-style: solid;
  padding: 8px;
  text-align: center;
  text-transform: ${({ uppercase }) => uppercase ? 'uppercase' : 'normal'};
`
