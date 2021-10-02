import { Meta, Story } from '@storybook/react';

import { HomeTemplate, IHomeTemplate } from './index';

export default {
  title: 'Templates/HomeTemplate',
} as Meta;

const Template: Story<IHomeTemplate> = (args) => <HomeTemplate {...args} />

export const Normal = Template.bind({})

const argTypes = {
}

const defaultArgs = {
}

Normal.args = { ...defaultArgs }
Normal.argTypes = argTypes

