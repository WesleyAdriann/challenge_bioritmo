import React from 'react'

import { assignTestId } from '../../../utils'

import { Text, IText } from '../../atoms/Text'
import { Radio, IRadio } from '../../atoms/Radio'

import { Container, TextWrapper } from './styles'

export interface IListItem {
  testID?: string
  text: string
  withRadio?: boolean
  radioProps?: Omit<IRadio, 'onClick'>
  rightText?: string
  textProps?: IText
  rightTextProps?: IText
  onClick?: () => void
}

export const ListItem: React.FC<IListItem> = ({
  testID = 'ListItem',
  text,
  withRadio,
  radioProps,
  rightText,
  textProps,
  rightTextProps,
  onClick,
  ...props
}) => (
  <Container
    onClick={onClick}
    {...props}
    isClickable={!!onClick}
    {...assignTestId('div', testID)}
  >
    <TextWrapper>
      {withRadio && (
        <Radio {...radioProps} onClick={onClick} testID={`${testID}_radio`} />
      )}
      <Text {...textProps} selectable={false} testID={`${testID}_text`}>
        {text}
      </Text>
    </TextWrapper>
    <Text {...textProps} selectable={false} testID={`${testID}_right_text`}>
      {rightText}
    </Text>
  </Container>
)
