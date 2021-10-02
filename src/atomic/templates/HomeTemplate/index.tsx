import React from 'react'
import { useTheme } from 'styled-components'

import { Text } from '../../atoms/Text'
import { Logo } from '../../../assets/Icon'

import { Container, Header, TitleWrapper, Footer } from './styles'

export interface IHomeTemplate {}

export const HomeTemplate: React.FC = () => {
  const theme = useTheme()

  return (<Container>
  <Header>
    <Logo />
  </Header>
  <TitleWrapper>
    <Text uppercase>
    Reabertura Smart Fit
    </Text>
    <Text>
    O horário de funcionamento das nossas unidades está seguindo os decretos de cada município. Por isso, confira aqui se a sua unidade está aberta e as medidas de segurança que estamos seguindo.
    </Text>
  </TitleWrapper>

<Footer>
  <Logo height='4rem' width='8rem' />
  <Text color={theme.colors.white}>
  Todos os direitos reservados - 2020
  </Text>
</Footer>

</Container>)
}
