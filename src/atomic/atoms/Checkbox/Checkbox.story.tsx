import React from 'react'
import { Meta, Story } from '@storybook/react'

import { Checkbox, ICheckbox } from './index'

export default {
  title: 'Atoms/Checkbox'
} as Meta

const Template: Story<ICheckbox> = (args) => <Checkbox {...args} />

export const Normal = Template.bind({})

const argTypes = {
  active: {
    control: 'boolean'
  },
  size: {
    control: 'range'
  },
  onClick: {
    action: 'onClick'
  }
}

const defaultArgs = {
  active: true,
  size: 24
}

Normal.args = { ...defaultArgs }
Normal.argTypes = argTypes
