import { ThemeProvider } from 'styled-components'
import { light } from './styles/themes/light'
import { dark } from './styles/themes/dark'
import { GlobalStyle } from './styles/global'
import { Home } from './page/Home'
import usePersistedState from './utils/usePersistedState'
import { DefaultTheme } from 'styled-components/dist/types'

export function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme');

  const toggleTheme = () =>{
    setTheme(theme.title == 'light' ? dark : light)
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <Home toggleTheme={toggleTheme} />
    </ThemeProvider>
  )
}
