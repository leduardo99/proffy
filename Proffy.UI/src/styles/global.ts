import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  :root {
    --color-background: ${({ theme }) => theme.colors.background};
    --color-primary-lighter: #9871F5;
    --color-primary-light: #916BEA;
    --color-primary: #8257E5;
    --color-primary-dark: #774DD6;
    --color-primary-darker: #6842C2;
    --color-secundary: #04D361;
    --color-secundary-dark: #04BF58;
    --color-title-in-primary: ${({ theme }) => theme.colors.titleInPrimary};
    --color-text-in-primary: ${({ theme }) => theme.colors.textInPrimary};
    --color-text-title: ${({ theme }) => theme.colors.textTitle};
    --color-text-complement: ${({ theme }) => theme.colors.textComplement};
    --color-text-base: ${({ theme }) => theme.colors.textBase};
    --color-line-in-white: ${({ theme }) => theme.colors.lineInWhite};
    --color-input-background: ${({ theme }) => theme.colors.inputBackground};
    --color-button-text: ${({ theme }) => theme.colors.buttonText};
    --color-box-base: ${({ theme }) => theme.colors.boxBase};
    --color-box-footer: ${({ theme }) => theme.colors.boxFooter};

    font-size: 60%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  #__next, body, html {
    height: 100vh;
    width: 100%;
  }

  body {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    -moz-osx-font-smoothing: grayscale !important;
    background: var(--color-background);
    transition: all 0.08s ease-in-out;
  }

  body, input, button, textarea, input::placeholder, textarea::placeholder {
    font: 500 1.6rem Poppins, sans-serif;
    border: 0;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active  {
    -webkit-box-shadow: 0 0 0px 1000px var(--white) inset;
    -webkit-transition: "color 9999s ease-out, background-color 9999s ease-out";
    -webkit-transition-delay: 9999s;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  @media (min-width: 700px) {
    :root {
      font-size: 62.5%;
    }
  }

  @media (max-width: 420px) {
    :root {
      font-size: 55.5%;
    }
  }
`
export default GlobalStyles
