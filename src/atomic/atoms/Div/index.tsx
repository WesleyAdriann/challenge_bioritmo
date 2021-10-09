import styled from 'styled-components'

import { assignTestId } from '../../../utils'

export interface IDiv {
  testID?: string
}

export const Div = styled.div.attrs<IDiv>(({ testID = 'Div' }) =>
  assignTestId('div', testID)
)<IDiv>``
