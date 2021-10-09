import React from 'react'

import { Text, IText } from '../../atoms/Text'
import { Radio, IRadio } from '../../atoms/Radio'
import { Checkbox, ICheckbox } from '../../atoms/Checkbox'

import { Container, TextWrapper } from './styles'

export interface IListItem {
  testID?: string
  text: string
  active?: boolean
  withRadio?: boolean
  radioProps?: Omit<IRadio, 'onClick' | 'active'>
  withCheckbox?: boolean
  checkboxProps?: Omit<ICheckbox, 'onClick' | 'active'>
  rightText?: string
  textProps?: Omit<IText, 'children'>
  rightTextProps?: Omit<IText, 'children'>
  marginBottom?: number
  withBottomLine?: boolean
  onClick?: () => void
}

export const ListItem: React.FC<IListItem> = ({
  testID = 'ListItem',
  text,
  active,
  withRadio,
  radioProps,
  withCheckbox,
  checkboxProps,
  rightText,
  textProps,
  rightTextProps,
  onClick,
  withBottomLine = true,
  ...props
}) => (
  <Container
    onClick={onClick}
    {...props}
    isClickable={!!onClick}
    withBottomLine={withBottomLine}
    testID={testID}
  >
    <TextWrapper>
      {withRadio && (
        <Radio
          {...radioProps}
          onClick={onClick}
          active={active}
          testID={`${testID}_radio`}
        />
      )}
      {withCheckbox && (
        <Checkbox
          {...checkboxProps}
          onClick={onClick}
          active={active}
          testID={`${testID}_checkbox`}
        />
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
