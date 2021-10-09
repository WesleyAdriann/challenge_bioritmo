import React from 'react'
import { Meta, Story } from '@storybook/react'

import { Div, IDiv } from './index'

export default {
  title: 'Atoms/Div'
} as Meta

const Template: Story<IDiv> = (args) => <Div {...args} />

export const Normal = Template.bind({})

const argTypes = {}

const defaultArgs: IDiv = {}

Normal.args = { ...defaultArgs }
Normal.argTypes = argTypes
