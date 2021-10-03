import styled from 'styled-components'

import iconHour from '../../../assets/images/icon/icon-hour.png'
import { ListItem as MoleculeListItem } from '../../molecules/ListItem'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const Header = styled.div`
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

export const FormHour = styled.div`
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

export const Footer = styled(Header)`
  background-color: ${(props) => props.theme.colors['dark-grey']};
  flex-direction: column;
  padding: 60px 0;
`
