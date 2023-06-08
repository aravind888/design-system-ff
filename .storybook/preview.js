import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import { createGlobalStyle } from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, lightTheme, darkTheme } from '../src/theme';
import { withDesign } from "storybook-addon-designs";

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      light: lightTheme,
      dark: darkTheme,
    },
    withDesign,
    defaultTheme: "dark",
    Provider: ThemeProvider,
    GlobalStyles: GlobalStyle,
  }),
];

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
