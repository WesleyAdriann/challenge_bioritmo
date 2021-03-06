import styled from 'styled-components'

import { Card } from '../../atoms/Card'
import { Div } from '../../atoms/Div'

export const Container = styled(Div)`
  display: flex;
  flex-direction: column;
`

export const Header = styled(Div)`
  align-items: center;
  background-color: ${(props) => props.theme.colors.black};
  display: flex;
  justify-content: center;
`

export const Section = styled.section`
  margin: auto;
  max-width: 1200px;
  padding: 20px;
  width: 100%;
`

export const SectionTitle = styled(Section)`
  margin: 16px auto;
`

export const TitleDivisor = styled(Div)`
  background-color: ${(props) => props.theme.colors['dark-grey']};
  height: 12px;
  margin: 22px 0 38px;
  width: 92px;
`

export const LegendWrapper = styled(Div)`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 24px;
  padding: 24px 0 12px;
  flex-wrap: wrap;

  @media (min-width: 700px) {
    flex-direction: row;
  }
`

export const Legend = styled(Div)`
  align-items: center;
  display: flex;
  flex-direction: column;
`

export const LegendItemsWrapper = styled(Div)`
  display: flex;
  gap: 16px;
  margin-top: 12px;
  justify-content: center;
  flex-wrap: wrap;
`

export const SectionLocations = styled(Section)`
  gap: 20px;
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: 700px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1100px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`

export const LocationCard = styled(Card).attrs(() => ({
  padding: 12,
  border: 4,
  radius: 8,
  shadow: true
}))`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding-bottom: 32px;
  gap: 8px;
`

export const Separator = styled(Div)`
  background-color: ${(props) => props.theme.colors['light-grey']};
  height: 1px;
  margin: 8px 0;
  opacity: 0.4;
  width: 100%;
`

export const LocationInfos = styled(Div)`
  align-items: center;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 16px;
`

export const LocationsHours = styled(Div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
`

export const Footer = styled(Header)`
  background-color: ${(props) => props.theme.colors['dark-grey']};
  flex-direction: column;
  padding: 60px 0;
`
