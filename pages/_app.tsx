import { ThemeProvider } from 'styled-components'
import CtxProvider from '../src/contexts/ctxGlobal'
import GlobalStyle from '../src/styles/GlobalStyle'
import theme from '../src/styles/theme'



export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <CtxProvider>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </CtxProvider>
    </>
  )
}
