import React from 'react'
import { Meta, Story } from '@storybook/react'

import { ImageWithLegend, IImageWithLegend } from './index'
import maskRecommended from '../../../assets/images/mask/recommended-mask.png'

export default {
  title: 'Molecules/ImageWithLegend'
} as Meta

const Template: Story<IImageWithLegend> = (args) => (
  <ImageWithLegend {...args} />
)

export const Normal = Template.bind({})

const argTypes = {
  legend: {
    control: 'text'
  },
  image: {
    control: 'file'
  }
}

const defaultArgs: IImageWithLegend = {
  image: maskRecommended,
  legend: 'Obrigatório'
}

Normal.args = { ...defaultArgs }
Normal.argTypes = argTypes
