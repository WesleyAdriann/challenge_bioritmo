import styled from 'styled-components'

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

export const SectionTitle = styled(Section)`
  margin: 16px 0;
`

export const TitleDivisor = styled.div`
  background-color: ${(props) => props.theme.colors['dark-grey']};
  height: 12px;
  margin: 22px 0 38px;
  width: 92px;
`

export const LegendWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px 0 12px;
`

export const Legend = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`

export const LegendItemsWrapper = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 12px;
`

export const Footer = styled(Header)`
  background-color: ${(props) => props.theme.colors['dark-grey']};
  flex-direction: column;
  padding: 60px 0;
`
