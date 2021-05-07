import { AppProps } from 'next/app'

import GlobalStyles from 'styles/global'
import { ThemesProvider } from 'contexts/ThemeContext'


function App({ Component, pageProps }: AppProps) {
  return (
    <ThemesProvider>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemesProvider>
  )
}

export default App