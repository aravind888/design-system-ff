import { create } from '@storybook/theming/create';

export default create({
  base: 'light',

  // Typography
  fontBase: "'Poppins', sans-serif",
//   fontCode: 'monospace',

  brandTitle: 'ffreedom app design system',
  brandUrl: 'https://ffreedom.com/',
  brandImage: '/logo-design-system.png',
  brandTarget: '_self',

  // Base Colors
  colorPrimary: '#2e2e54',
  colorSecondary: '#56c7b3',
//   appBg: '#ffffff',
//   appContentBg: '#ffffff',
//   appBorderColor: '#585C6D',

  // UI
  appBorderRadius: 4,

  // Text colors
  textColor: '#10162F',
  textInverseColor: '#ffffff',

  // Toolbar default and active colors
  barTextColor: '#9E9E9E',
  barSelectedColor: '#585C6D',
//   barBg: '#ffffff',

  // Form colors
//   inputBg: '#ffffff',
//   inputBorder: '#10162F',
  inputTextColor: '#10162F',
  inputBorderRadius: 2,
});