import '../styles/globals.css'
import type { AppProps } from 'next/app'
import ThemeProvider from '../lib/ThemeHook';
import LangProvider from '../lib/LanguageHook';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <LangProvider>
        <Component {...pageProps} />
      </LangProvider>
    </ThemeProvider>
  )
}

export default MyApp
