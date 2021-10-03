import React from 'react'
import { useTheme } from 'styled-components'

import { Text } from '../../atoms/Text'
import { Card } from '../../atoms/Card'
import { FormSelectHour, IFormSelectHour } from '../../organisms/FormSelectHour'

import { Logo } from '../../../assets/Icon'

import { Container, Header, Section, Footer } from './styles'

export interface IHomeTemplate {
  form: IFormSelectHour
}

export const HomeTemplate: React.FC<IHomeTemplate> = ({ form }) => {
  const theme = useTheme()

  return (
    <Container>
      <Header>
        <Logo />
      </Header>
      <Section>
        <Text uppercase size={32}>
          Reabertura Smart Fit
        </Text>
        <Text>
          O horário de funcionamento das nossas unidades está seguindo os
          decretos de cada município. Por isso, confira aqui se a sua unidade
          está aberta e as medidas de segurança que estamos seguindo.
        </Text>
      </Section>
      <Section>
        <FormSelectHour {...form} />
      </Section>
      <Section>
        <Card padding={12}>Máscara Toalha Bebedouro Vestiários</Card>
      </Section>
      <Footer>
        <Logo height='4rem' width='8rem' />
        <Text color={theme.colors.white}>
          Todos os direitos reservados - 2020
        </Text>
      </Footer>
    </Container>
  )
}
