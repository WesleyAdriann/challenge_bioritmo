import React from 'react'
import { Meta, Story } from '@storybook/react'

import { Radio, IRadio } from './index'

export default {
  title: 'Atoms/Radio'
} as Meta

const Template: Story<IRadio> = (args) => <Radio {...args} />

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

const defaultArgs: IRadio = {
  active: true,
  size: 24
}

Normal.args = { ...defaultArgs }
Normal.argTypes = argTypes
