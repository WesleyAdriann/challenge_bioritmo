import { createGlobalStyle } from 'styled-components'

import GothanBlack from '../assets/fonts/gotham-black.woff2'
import GothanBold from '../assets/fonts/gotham-bold.woff2'
import GothanBook from '../assets/fonts/gotham-book.woff2'
import GothanLight from '../assets/fonts/gotham-light.woff2'

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: Gothan;
    src: url(${GothanBlack}) format('woff2');
    font-weight: 900;
  }

  @font-face {
    font-family: Gothan;
    src: url(${GothanBold}) format('woff2');
    font-weight: bold;
  }

  @font-face {
    font-family: Gothan;
    src: url(${GothanBook}) format('woff2');
    font-weight: 400;
  }
  @font-face {
    font-family: Gothan;
    src: url(${GothanLight}) format('woff2');
    font-weight: 300;
  }

  * {
    box-sizing: border-box;
    font-family: Gothan;
    margin: 0;
    padding: 0;
  }
`
