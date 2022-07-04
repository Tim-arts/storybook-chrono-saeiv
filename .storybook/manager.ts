import { addons } from '@storybook/addons';
import { create } from '@storybook/theming';
// @ts-ignore
import logo from '../src/assets/logo/chrono-logo.svg';

const theme = create({
  base: 'light',

  // Base colors
  // Primary and Secondary need to be inverted for some reasons
  colorPrimary: '#888888',
  colorSecondary: '#2e8bfc',

  // UI
  appBg: '#F6F9FC',
  appContentBg: '#FFFFFF',
  appBorderColor: 'rgba(0,0,0,.1)',
  appBorderRadius: 8,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#333333',
  textInverseColor: '#FFFFFF',
  textMutedColor: '#666666',

  // Toolbar default and active colors
  barTextColor: '#888888',
  barSelectedColor: '#2e8bfc',
  barBg: '#FFFFFF',

  // Form colors
  inputBg: '#FFFFFF',
  inputBorder: 'rgba(0,0,0,.3)',
  inputTextColor: '#333333',
  inputBorderRadius: 4,

  // Brand assets
  brandTitle: 'CHRONO - SAEIV',
  brandUrl: 'https://chronotest.exo.quebec/CarteGeo',
  brandImage: logo,
});

addons.setConfig({
  theme,
  showPanel: true,
  panelPosition: 'bottom',
});
