import React from 'react'
import { Meta, Story } from '@storybook/react'

import { Text, IText } from './index'
import * as types from './types'

export default {
  title: 'Atoms/Text'
} as Meta

const Template: Story<IText> = (args) => <Text {...args} />

export const Normal = Template.bind({})

const argTypes = {
  children: {
    control: 'text'
  },
  align: {
    options: ['left', 'right', 'center', 'justify', 'initial', 'inherit'],
    control: {
      type: 'select'
    }
  },
  weight: {
    options: ['900', 'bold', '400', '300'],
    control: {
      type: 'select'
    }
  },
  size: {
    control: 'number'
  },
  color: {
    control: 'color'
  },
  selectable: {
    control: 'boolean'
  }
}

const defaultArgs = {
  children: 'Texto',
  weight: '400' as types.TWeight,
  size: 14,
  color: '#000',
  selectable: true
}

Normal.args = { ...defaultArgs }
Normal.argTypes = argTypes
