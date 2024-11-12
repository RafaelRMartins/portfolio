import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string,

    colors: {
      white: string,
      black: string,

      'primary-100': string,
      'primary-200': string,
      'primary-300': string,
      'primary-825': string,
      'primary-850': string,
      'primary-800': string,

      'second-225': string,
      'second-250': string,
      'second-275': string,
      'second-200': string,
      'second-700': string,
      
      'box-shadow': string,
    },
  }
}
