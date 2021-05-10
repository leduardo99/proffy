import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
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

      color: ${theme.colors.title};
    }

    button {
      cursor: pointer;
    }

    input {
      height: 72px;
    }

    input,
    textarea {
      background-color: ${theme.colors.shapes};
      border: 1px solid ${theme.colors.border};
      border-radius: 8px;
    }

    a {
      color: inherit;
      text-decoration: none;
    }
  `}
`
export default GlobalStyles
