import styled from 'styled-components'

import iconHour from '../../../assets/images/icon/icon-hour.png'

import { Div } from '../../atoms/Div'
import { ListItem as MoleculeListItem } from '../../molecules/ListItem'

export const HourTitleWrapper = styled(Div)`
  align-items: center;
  display: flex;
  gap: 12px;
  padding-bottom: 16px;
`

export const IconHour = styled.img.attrs(() => ({
  alt: 'clock',
  src: iconHour
}))`
  height: 34px;
  width: 34px;
`

export const ListItemRadio = styled(MoleculeListItem).attrs(() => ({
  withRadio: true,
  radioProps: { size: 20 }
}))``

export const ClosedUnitsAndResultsWrapper = styled(Div)`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: 700px) {
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
  }
`

export const ButtonsWrapper = styled(Div)`
  display: flex;
  flex-direction: column;
  gap: 22px;
  margin: auto;
  margin-top: 16px;
  max-width: 770px;

  @media (min-width: 700px) {
    flex-direction: row;
  }
`
