import styled from 'styled-components'

import iconHour from '../../../assets/images/icon/icon-hour.png'
import { ListItem as MoleculeListItem } from '../../molecules/ListItem'

export const HourTitleWrapper = styled.div`
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

export const ClosedUnitsAndResultsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;
  margin-top: 16px;
`
