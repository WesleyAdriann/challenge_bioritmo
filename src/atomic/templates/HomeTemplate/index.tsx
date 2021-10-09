import React from 'react'
import { useTheme } from 'styled-components'

import { Text } from '../../atoms/Text'
import { Card } from '../../atoms/Card'
import { ImageWithLegend } from '../../molecules/ImageWithLegend'
import { FormSelectHour, IFormSelectHour } from '../../organisms/FormSelectHour'

import { ILocation } from '../../../store/slices/gymsLocations/types'

import { Logo } from '../../../assets/Icon'
import { images } from './images'

import {
  Container,
  Header,
  Section,
  SectionTitle,
  TitleDivisor,
  Legend,
  LegendWrapper,
  LegendItemsWrapper,
  SectionLocations,
  LocationCard,
  LocationInfos,
  LocationsHours,
  Separator,
  Footer
} from './styles'

export interface IHomeTemplate {
  testID?: string
  form: Omit<IFormSelectHour, 'quantity'>
  locations?: ILocation[]
  isSearch: boolean
}

export const HomeTemplate: React.FC<IHomeTemplate> = ({
  testID = 'HomeTemplate',
  form,
  locations = [],
  isSearch,
  ...props
}) => {
  const theme = useTheme()

  return (
    <Container {...props} testID={testID}>
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
          Reabertura
          <br />
          Smart Fit
        </Text>
        <TitleDivisor />
        <Text color={theme.colors['dark-grey']} lineHeight={1.6}>
          O horário de funcionamento das nossas unidades está seguindo os
          decretos de cada município. Por isso, confira aqui se a sua unidade
          está aberta e as medidas de segurança que estamos seguindo.
        </Text>
      </SectionTitle>
      <Section>
        <FormSelectHour {...form} quantity={isSearch ? locations.length : 0} />
      </Section>
      <Section>
        <Card padding={12}>
          <LegendWrapper>
            <Legend>
              <Text weight='bold'>Máscara</Text>
              <LegendItemsWrapper>
                <ImageWithLegend
                  legend='Obrigatório'
                  image={images.mask.required}
                />
                <ImageWithLegend
                  legend='Recomendado'
                  image={images.mask.recommended}
                />
              </LegendItemsWrapper>
            </Legend>
            <Legend>
              <Text weight='bold'>Toalha</Text>
              <LegendItemsWrapper>
                <ImageWithLegend
                  legend='Obrigatório'
                  image={images.towel.required}
                />
                <ImageWithLegend
                  legend='Recomendado'
                  image={images.towel.recommended}
                />
              </LegendItemsWrapper>
            </Legend>
            <Legend>
              <Text weight='bold'>Bebedouro</Text>
              <LegendItemsWrapper>
                <ImageWithLegend
                  legend='Parcial'
                  image={images.fountain.partial}
                />
                <ImageWithLegend
                  legend='Proibido'
                  image={images.fountain.not_allowed}
                />
              </LegendItemsWrapper>
            </Legend>
            <Legend>
              <Text weight='bold'>Vestiários</Text>
              <LegendItemsWrapper>
                <ImageWithLegend
                  legend='Liberado'
                  image={images.locker_room.allowed}
                />
                <ImageWithLegend
                  legend='Parcial'
                  image={images.locker_room.partial}
                />
                <ImageWithLegend
                  legend='Fechado'
                  image={images.locker_room.closed}
                />
              </LegendItemsWrapper>
            </Legend>
          </LegendWrapper>
        </Card>
      </Section>
      <SectionLocations>
        {locations.map((location, index) => (
          <LocationCard key={index}>
            <Text
              color={theme.colors[location.opened ? 'green' : 'red']}
              weight='bold'
            >
              {location.opened ? 'Aberto' : 'Fechado'}
            </Text>
            <Text size={24} weight='bold' color={theme.colors['dark-grey']}>
              {location.title}
            </Text>
            <Text color={theme.colors['light-grey']}>
              {location.content ?? ''}
            </Text>
            {location.opened && (
              <>
                <Separator />
                <LocationInfos>
                  <ImageWithLegend
                    image={images.mask[location.mask ?? 'required']}
                    legend=' '
                  />
                  <ImageWithLegend
                    image={images.towel[location.towel ?? 'required']}
                    legend=' '
                  />
                  <ImageWithLegend
                    image={images.fountain[location.fountain ?? 'partial']}
                    legend=' '
                  />
                  <ImageWithLegend
                    image={
                      images.locker_room[location.locker_room ?? 'partial']
                    }
                    legend=' '
                  />
                </LocationInfos>
                <LocationsHours>
                  {location?.schedules?.map((schedule, index) => (
                    <div key={index}>
                      <Text size={22} weight='bold'>
                        {schedule.weekdays}
                      </Text>
                      <Text>{schedule.hour}</Text>
                    </div>
                  ))}
                </LocationsHours>
              </>
            )}
          </LocationCard>
        ))}
      </SectionLocations>
      <Footer>
        <Logo height='4rem' width='8rem' />
        <Text color={theme.colors.white}>
          Todos os direitos reservados - 2020
        </Text>
      </Footer>
    </Container>
  )
}
