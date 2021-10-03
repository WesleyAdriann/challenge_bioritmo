import React from 'react'

import { assignTestId } from '../../../utils'

import { Text } from '../../atoms/Text'

import { Container, Image } from './styles'

export interface IImageWithLegend {
  testID?: string
  image: string
  legend: string
}

export const ImageWithLegend: React.FC<IImageWithLegend> = ({
  testID = 'ImageWithLegend',
  image,
  legend,
  ...props
}) => (
  <Container {...props} {...assignTestId('div', testID)}>
    <Image src={image} />
    <Text>{legend}</Text>
  </Container>
)
