import { darken, lighten } from 'polished';
import config from './config';

const black = '#000';
const deepBlue = '#0a2239';
const green = '#7fee04';
const offBlack = '#222';
const offWhite = '#f6f6f9';
const orange = '#ffbf00';
const red = '#d0021b';
const spraoiBlue = '#46b2e2';
const white = '#fff';

export default {
  default: {
    baseFontSizeBeforeBreakpoint: {
      lg: '18px',
      md: '18px',
      sm: '3.6vw',
      xl: '18px',
      xs: '5vw',
    },
    boxShadows: {
      md: '0 3px 18px 0 rgba(0, 0, 0, 0.1)',
    },
    breakpoints: {
      lg: '1200px',
      md: '800px',
      sm: '500px',
      xl: '1600px',
      xs: '300px',
    },
    colors: {
      background: offWhite,
      backgroundDark: darken(0.05, offWhite),
      backgroundDarker: darken(0.1, offWhite),
      backgroundLight: lighten(0.05, offWhite),
      backgroundLighter: lighten(0.1, offWhite),
      black,
      error: red,
      primary: spraoiBlue,
      primaryDark: darken(0.05, spraoiBlue),
      primaryDarker: darken(0.1, spraoiBlue),
      primaryLight: lighten(0.05, spraoiBlue),
      primaryLighter: lighten(0.1, spraoiBlue),
      secondary: deepBlue,
      secondaryDark: darken(0.05, deepBlue),
      secondaryDarker: darken(0.1, deepBlue),
      secondaryLight: lighten(0.05, deepBlue),
      secondaryLighter: lighten(0.1, deepBlue),
      success: green,
      text: offBlack,
      textLight: lighten(0.05, offBlack),
      textLighter: lighten(0.1, offBlack),
      warning: orange,
      white,
    },
    fonts: {
      mono: 'Menlo, monospace',
      primary: '"Open Sans", sans-serif',
      secondary: '"Open Sans", sans-serif',
    },
    fontSizes: {
      hero: '3rem',
      lg: '1.2rem',
      md: '1rem',
      sm: '0.8rem',
      xl: '1.6rem',
      xs: '0.7rem',
      xxl: '2.2rem',
      xxs: '0.6rem',
    },
    fontWeights: {
      bold: 700,
      light: 300,
      normal: 400,
    },
    letterSpacings: {
      lg: '0.125em',
      md: '0.1em',
      sm: '0.05em',
    },
    lineHeights: {
      md: '1.6em',
    },
    radii: {
      md: '4px',
    },
    space: {
      hero: '120px',
      lg: '40px',
      md: '20px',
      sm: '10px',
      xl: '60px',
      xs: '5px',
      xxl: '80px',
      xxs: '3px',
    },
    transitionSpeeds: {
      fast: '.1s',
      normal: '.2s',
      slow: '.4',
    },
  },
}[config.theme];
