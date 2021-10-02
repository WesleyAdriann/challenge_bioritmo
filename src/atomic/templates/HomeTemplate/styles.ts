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

export const TitleWrapper = styled.div`
  padding: 20px;
`


export const Footer = styled(Header)`
  background-color: ${(props) => props.theme.colors['dark-grey']};
  flex-direction: column;
  padding: 60px 0;
`
