import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Home } from './page/Home'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <Header/>
      <Home />
      <Footer/>
    </ThemeProvider>
  )
}
