import { Meta, Story } from '@storybook/react';

import { Text, IText } from './index';

export default {
  title: 'Atoms/Text',
} as Meta;

const Template: Story<IText> = (args) => <Text {...args} />

export const Normal = Template.bind({})

const argTypes = {
  children: {
    control: 'text'
  },
  align: {
    options: ['left','right', 'center', 'justify', 'initial', 'inherit'],
    control: {
      type: 'select'
    }
  },
  weight: {
    options: [900, 'bold', 400, 300],
    control: {
      type: 'select'
    }
  },
  size: {
    control: 'number'
  },
  color: {
    control: 'color'
  }
}

const defaultArgs = {
  children: 'Texto',
  weight: 400,
  size: 12,
  color: '#000'
}

Normal.args = { ...defaultArgs }
Normal.argTypes = argTypes
