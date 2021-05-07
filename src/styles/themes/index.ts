import { DefaultTheme, CustomTheme } from 'styled-components'
import dark from './dark'
import light from './light'

const defaultTheme = {
  font: {
    family: {
      inter: '"Inter", sans-serif',
    },
    light: 400,
    normal: 500,
    bold: 600,
    sizes: {
      xsmall: '0.6rem',
      small: '0.9rem',
      medium: '1rem',
      large: '1.3rem',
      xlarge: '1.5rem',
      xxlarge: '1.8rem'
    }
  }
}

function combineTheme(theme: CustomTheme): DefaultTheme {
  return { ...defaultTheme, ...theme }
}

export { combineTheme, dark, light }