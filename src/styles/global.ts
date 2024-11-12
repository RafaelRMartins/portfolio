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
    box-shadow: 0 0 0 2px ${(props) => props.theme.colors['second-200']};
    border-radius: 4px;
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
      background-color: ${(props) => props.theme.colors['primary-200']};
  }

  ::-webkit-scrollbar-thumb {
      background-color: ${(props) => props.theme.colors['primary-825']};
      border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
      background-color: ${(props) => props.theme.colors['primary-850']};
  }
  
  body {
    background-color: ${(props) => props.theme.colors['primary-200']};
    color: ${(props) => props.theme.colors['primary-800']};
    -webkit-font-smoothing: antialiased;
    transition: background-color 0.8s ease-in-out;
  }

  body, input, textarea, button {
    font: 400 1rem "Raleway", sans-serif;
  }
`