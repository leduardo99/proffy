import NextNprogress from 'nextjs-progressbar'

import { Provider as AuthProvider } from 'next-auth/client'
import { ApolloProvider } from '@apollo/client'

import { AppProps } from 'next/app'

import { ToastContainer } from 'react-toastify'

import GlobalStyles from 'styles/global'
import { ThemesProvider } from 'contexts/ThemeContext'

import { useApollo } from 'utils/apollo'

import 'react-toastify/dist/ReactToastify.css'

function App({ Component, pageProps }: AppProps) {
  const client = useApollo(pageProps.initialApolloState)

  return (
    <AuthProvider session={pageProps.session}>
      <ApolloProvider client={client}>
        <ThemesProvider>
          <GlobalStyles />
          <NextNprogress
            color="#04D361"
            startPosition={0.3}
            stopDelayMs={200}
            height={5}
          />
          <ToastContainer />
          <Component {...pageProps} />
        </ThemesProvider>
      </ApolloProvider>
    </AuthProvider>
  )
}

export default App
