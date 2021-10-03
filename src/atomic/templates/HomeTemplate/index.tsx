import React from 'react'
import { useTheme } from 'styled-components'

import { Text } from '../../atoms/Text'
import { Card } from '../../atoms/Card'
import { ImageWithLegend } from '../../molecules/ImageWithLegend'
import { FormSelectHour, IFormSelectHour } from '../../organisms/FormSelectHour'

import { Logo } from '../../../assets/Icon'

import recommendedMask from '../../../assets/images/mask/recommended-mask.png'
import requiredMask from '../../../assets/images/mask/required-mask.png'

import recommendedTowel from '../../../assets/images/towel/recommended-towel.png'
import requiredTowel from '../../../assets/images/towel/required-towel.png'

import forbiddenFountain from '../../../assets/images/fountain/forbidden-fountain.png'
import partialFountain from '../../../assets/images/fountain/partial-fountain.png'

import forbiddenLockerroom from '../../../assets/images/lockerroom/forbidden-lockerroom.png'
import partialLockerroom from '../../../assets/images/lockerroom/partial-lockerroom.png'
import requiredLockerroom from '../../../assets/images/lockerroom/required-lockerroom.png'

import {
  Container,
  Header,
  Section,
  SectionTitle,
  TitleDivisor,
  Legend,
  LegendWrapper,
  LegendItemsWrapper,
  Footer
} from './styles'

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
      <SectionTitle>
        <Text
          uppercase
          size={32}
          weight='bold'
          color={theme.colors['dark-grey']}
        >
          Reabertura{'\n'}Smart Fit
        </Text>
        <TitleDivisor />
        <Text color={theme.colors['dark-grey']} lineHeight={1.6}>
          O horário de funcionamento das nossas unidades está seguindo os
          decretos de cada município. Por isso, confira aqui se a sua unidade
          está aberta e as medidas de segurança que estamos seguindo.
        </Text>
      </SectionTitle>
      <Section>
        <FormSelectHour {...form} />
      </Section>
      <Section>
        <Card padding={12}>
          <LegendWrapper>
            <Legend>
              <Text weight='bold'>Máscara</Text>
              <LegendItemsWrapper>
                <ImageWithLegend legend='Obrigatório' image={requiredMask} />
                <ImageWithLegend legend='Recomendado' image={recommendedMask} />
              </LegendItemsWrapper>
            </Legend>
            <Legend>
              <Text weight='bold'>Toalha</Text>
              <LegendItemsWrapper>
                <ImageWithLegend legend='Obrigatório' image={requiredTowel} />
                <ImageWithLegend
                  legend='Recomendado'
                  image={recommendedTowel}
                />
              </LegendItemsWrapper>
            </Legend>
            <Legend>
              <Text weight='bold'>Bebedouro</Text>
              <LegendItemsWrapper>
                <ImageWithLegend legend='Parcial' image={partialFountain} />
                <ImageWithLegend legend='Proibido' image={forbiddenFountain} />
              </LegendItemsWrapper>
            </Legend>
            <Legend>
              <Text weight='bold'>Vestiários</Text>
              <LegendItemsWrapper>
                <ImageWithLegend legend='Liberado' image={requiredLockerroom} />
                <ImageWithLegend legend='Parcial' image={partialLockerroom} />
                <ImageWithLegend legend='Fechado' image={forbiddenLockerroom} />
              </LegendItemsWrapper>
            </Legend>
          </LegendWrapper>
        </Card>
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
