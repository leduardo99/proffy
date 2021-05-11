import 'styled-components'

import theme from 'styles/themes'

type Theme = typeof theme

declare module 'styled-components' {
  interface Colors {
    background: string
    primaryLighter: string
    primaryLight: string
    primary: string
    primaryLdark: string
    primaryDarker: string
    secondary: string
    secondaryDark: string
    titleInPrimary: string
    textInPrimary: string
    textTitle: string
    textComplement: string
    textBase: string
    lineInWhite: string
    inputBackground: string
    buttonText: string
    boxBase: string
    boxFooter: string
    disabledButton: string
    errorBox: string
  }

  export interface DefaultTheme extends Theme {
    title: string
    colors: Colors
  }

  export interface CustomTheme {
    title: string
    colors: Colors
  }
}
