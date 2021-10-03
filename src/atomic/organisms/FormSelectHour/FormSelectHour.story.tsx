import React from 'react'
import { Meta, Story } from '@storybook/react'

import { FormSelectHour, IFormSelectHour } from './index'

export default {
  title: 'Organisms/FormSelectHour'
} as Meta

const Template: Story<IFormSelectHour> = (args) => <FormSelectHour {...args} />

export const Normal = Template.bind({})

const argTypes = {
  quantity: {
    control: 'number'
  },
  onSubmit: {
    action: 'onSubmit'
  },
  onClear: {
    action: 'onClear'
  }
}

const defaultArgs: Omit<IFormSelectHour, 'onSubmit' | 'onClear'> = {
  quantity: 0
}

Normal.args = { ...defaultArgs }
Normal.argTypes = argTypes
