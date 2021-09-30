import { Meta, Story } from '@storybook/react';

import { theme } from '../../../tokens'

import { Card, ICard } from './index';

export default {
  title: 'Atoms/Card',
} as Meta;

const Template: Story<ICard> = (args) => <Card {...args} />

export const Normal = Template.bind({})

const argTypes = {
  color: {
    control: 'color'
  },
  radius: {
    control: 'range'
  },
  border: {
    control: 'range'
  },
  padding: {
    control: 'range'
  },
  shadow: {
    control: 'boolean'
  }
}

const defaultArgs = {
  children: 'Card',
  color: theme.colors['lightest-grey'],
  shadow: false,
  radius: 8,
  padding: 8,
  border: 0
}

Normal.args = { ...defaultArgs }
Normal.argTypes = argTypes

