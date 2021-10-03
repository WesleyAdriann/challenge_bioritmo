import React from 'react'
import { Meta, Story } from '@storybook/react'

import { ListItem, IListItem } from './index'

export default {
  title: 'Molecules/ListItem'
} as Meta

const Template: Story<IListItem> = (args) => <ListItem {...args} />

export const Normal = Template.bind({})

const argTypes = {
  text: {
    control: 'text'
  },
  withRadio: {
    control: 'boolean'
  },
  rightText: {
    control: 'text'
  },
  active: {
    control: 'boolean'
  },
  onClick: {
    action: 'onClick'
  }
}

const defaultArgs: IListItem = {
  text: 'Manhã',
  radioProps: {
    size: 20
  }
}

Normal.args = { ...defaultArgs }
Normal.argTypes = argTypes
