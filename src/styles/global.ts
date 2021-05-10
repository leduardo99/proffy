import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ${({ theme }) => css`
    @media (max-width: 1080px) {
      html {
        font-size: 93.75%;
      }
    }

    @media (max-width: 768px) {
      html {
        font-size: 87.5%;
      }
    }

    body {
      font-family: 'Poppins', sans-serif;
      background-color: ${theme.colors.background};
      transition: background-color 0.3s, color 0.3s;
    }

    html {
      overflow-x: hidden;
    }

    body,
    input,
    button,
    textarea {
      font: 500 1.6rem Poppins;
    }

    button {
      cursor: pointer;
    }

    .container {
      width: 90vw;
      max-width: 700px;
    }

    a {
      color: inherit;
      text-decoration: none;
    }
  `}
`
export default GlobalStyles
