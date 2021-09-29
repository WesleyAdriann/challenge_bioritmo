import { Meta, Story } from '@storybook/react';

import { theme } from '../../../style'

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
  shadow: false
}

Normal.args = { ...defaultArgs }
Normal.argTypes = argTypes

