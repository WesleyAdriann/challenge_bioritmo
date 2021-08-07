import React from 'react'

import { Meta, Story } from '@storybook/react';

import { Button, IButton } from './index';

export default {
  title: 'Atoms/Button',
} as Meta;

const Template: Story<IButton> = (args) => <Button {...args} />

export const Normal = Template.bind({})

const argTypes = {
  text: {
    control: {
      type: 'text'
    }
  },
  variation: {
    options: ['normal', 'outlined'],
    control: {
      type: 'select'
    }
  },
  onClick: {
    action: 'onClick'
  }
}

Normal.args = {
  text: 'Texto'
}
Normal.argTypes = argTypes

export const Outlined = Template.bind({})

Outlined.args = {
  text: 'Texto',
  variation: 'outlined'
}
Outlined.argTypes = argTypes
