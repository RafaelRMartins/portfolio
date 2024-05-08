import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    scroll-behavior: smooth;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme['primary-700']};
    border-radius: 4px;
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
      background-color: ${(props) => props.theme['second-800']};
  }

  ::-webkit-scrollbar-thumb {
      background-color: ${(props) => props.theme['second-300']};
      border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
      background-color: ${(props) => props.theme['second-700']};
  }
  
  body {
    background-color: ${(props) => props.theme['second-800']};
    color: ${(props) => props.theme['primary-700']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font: 400 1rem 'Nunito', sans-serif;
  }
`