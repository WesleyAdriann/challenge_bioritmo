import React from 'react'
import { useTheme } from 'styled-components'

import { Text } from '../../atoms/Text'
import { Card } from '../../atoms/Card'
import { Button } from '../../atoms/Button'
import { ListItem } from '../../molecules/ListItem'
import { Logo } from '../../../assets/Icon'

import {
  Container,
  Header,
  Section,
  FormHour,
  IconHour,
  ListItemRadio,
  ClosedUnitsAndResultsWrapper,
  ButtonsWrapper,
  Footer
} from './styles'

export interface IHomeTemplate {}

export const HomeTemplate: React.FC = () => {
  const theme = useTheme()

  return (
    <Container>
      <Header>
        <Logo />
      </Header>
      <Section>
        <Text uppercase>Reabertura Smart Fit</Text>
        <Text>
          O horário de funcionamento das nossas unidades está seguindo os
          decretos de cada município. Por isso, confira aqui se a sua unidade
          está aberta e as medidas de segurança que estamos seguindo.
        </Text>
      </Section>
      <Section>
        <Card color={theme.colors.white} border={4} radius={8} padding={16}>
          <FormHour>
            <IconHour />
            <Text>Horário</Text>
          </FormHour>
          <ListItem text='Qual período quer treinar?' marginBottom={16} />
          <ListItemRadio text='Manhã' rightText='06:00 às 12:00' />
          <ListItemRadio text='Tarde' rightText='12:01 às 18:00' />
          <ListItemRadio
            text='Noite'
            rightText='18:01 às 23:00'
            marginBottom={16}
          />
          <ClosedUnitsAndResultsWrapper>
            <ListItem
              text='Exibir unidades fechadas'
              withCheckbox
              checkboxProps={{ size: 20 }}
              withBottomLine={false}
            />
            <Text align='center'>Resultados encontrados: 0</Text>
          </ClosedUnitsAndResultsWrapper>
          <ButtonsWrapper>
            <Button text='Encontrar unidade' onClick={() => {}} uppercase />
            <Button
              text='Limpar'
              onClick={() => {}}
              variation='outlined'
              uppercase
            />
          </ButtonsWrapper>
        </Card>
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
