import 'styled-components'

declare module 'styled-components' {
  interface Colors {
    background: string
    primary: string
    secondary: string
    text: string
  }

  export interface DefaultTheme {
    title: string
    colors: Colors
    font: {
      family: {
        inter: string
      }
      light: number
      normal: number
      bold: number
      sizes: {
        xsmall: string
        small: string
        medium: string
        large: string
        xlarge: string
        xxlarge: string
      }
    }
  }

  export interface CustomTheme {
    title: string
    colors: Colors
  }
}