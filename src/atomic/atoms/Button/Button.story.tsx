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
  uppercase: {
    control: {
      type: 'boolean'
    }
  },
  onClick: {
    action: 'onClick'
  }
}

const defaultArgs = {
  text: 'Texto',
  uppercase: false,
}

Normal.args = { ...defaultArgs,
}
Normal.argTypes = argTypes

export const Outlined = Template.bind({})

Outlined.args = {
  ...defaultArgs,
  variation: 'outlined'
}
Outlined.argTypes = argTypes
