import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
  .img-fluid {
    width: 100%;
  }
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }
`;

export const lightTheme = {
  colors: {
    background: '#F6F9FC',
    backgroundInverse: '#7A8997',
    
    primary: '#2e2e54',
    secondary: '#1EA7FD',
    tertiary: '#DDDDDD',

    text: '#222222',

    light: "#ffffff",
    dark: "#000000"
  },
  spacing: {
    padding: {
      small: 15,
      medium: 20,
      large: 30,
    },
    borderRadius: {
      small: 5,
      default: 10,
    },
  },
  typography: {
    type: {
      primary: '"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
      code: '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace',
    },
    weight: {
      thin: '200',
      normal: '300',
      regular: '400',
      bold: '700',
      extrabold: '800',
      black: '900',
    },
    size: {
      s1: 12,
      s2: 14,
      s3: 16,
      m1: 20,
      m2: 24,
      m3: 28,
      l1: 32,
      l2: 40,
      l3: 48,
    },
  },
};


export const darkTheme = {
  ...lightTheme,
  colors: {
    background: '#000000',
    backgroundInverse: '#333333',
    
    primary: '#56c7b3',
    secondary: '#1b8bd0',
    tertiary: '#DDDDDD',
    text: '#FFFFFF',

    light: '#000000',
    dark: '#ffffff'
  },
};