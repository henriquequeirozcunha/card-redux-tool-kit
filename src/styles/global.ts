import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: local(''),
       url('/fonts/poppins-v15-latin-300.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
}
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local(''),
       url('/fonts/poppins-v15-latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
}
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: local(''),
       url('/fonts/poppins-v15-latin-600.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  &::before,
  &::after {
    box-sizing: inherit;
  }
}

${({ theme }) => css`
  html {
    font-size: 62.5%;
  }

  body {
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    background-color: ${theme.colors.mainBg};

    min-height: 100vh;
  }

  div#__next,
  div#__next > div {
    height: 100%;
    overflow-x: hidden;
  }
`}
`

export default GlobalStyles
