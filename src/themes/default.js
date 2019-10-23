/* eslint-disable prefer-destructuring */

import { darken, lighten } from 'polished';

const black = '#222';
const blue = '#0663B3';
const blueDark = '#0B2238';
const blueLight = '#2695F8';
const green = '#3AC4AC';
const orange = '#F19B6F';
const red = '#E74C3C';
const white = '#fefefe';
const whiteMoreTransparent = 'rgba(255, 255, 255, 0.1)';
const whiteTransparent = 'rgba(255, 255, 255, 0.4)';

const grays = [
  '#F5F6FA',
  '#EBEEF5',
  '#DFE4F0',
  '#BDC6DF',
  '#8190AD',
  '#2e2e31',
];

const breakpoints = ['300px', '500px', '700px', '1200px', '1600px'];
breakpoints.xs = breakpoints[0];
breakpoints.sm = breakpoints[1];
breakpoints.md = breakpoints[2];
breakpoints.lg = breakpoints[3];
breakpoints.xl = breakpoints[4];

const fontSizeScale = 1.25;

export default {
  baseFontSizesForBreakpoint: ['3.5vw', '3.5vw', '2.2vw', '15px', '15px'],
  breakpoints,
  colors: {
    accent: blueLight,
    accentDark: darken(0.1, blueLight),
    accentLight: lighten(0.1, blueLight),
    accentSecondary: blue,
    accentSecondaryDark: darken(0.1, blue),
    accentSecondaryLight: lighten(0.1, blue),
    black,
    body: white,
    border: grays[3],
    borderSecondary: whiteMoreTransparent,
    error: red,
    grays,
    primary: blueDark,
    primaryDark: darken(0.1, blueDark),
    primaryLight: lighten(0.1, blueDark),
    success: green,
    text: {
      heading: blueDark,
      link: blueLight,
      primary: lighten(0.05, blueDark),
      subtle: grays[4],
      subtleSecondary: whiteTransparent,
    },
    warning: orange,
    white,
  },
  fonts: {
    mono: 'Menlo, monospace',
    primary: 'Montserrat, sans-serif',
    secondary: 'Montserrat, sans-serif',
  },
  fontSizes: [
    `${1 / fontSizeScale / fontSizeScale / fontSizeScale}rem`,
    `${1 / fontSizeScale / fontSizeScale}rem`,
    `${1 / fontSizeScale}rem`,
    '1rem',
    `${fontSizeScale}rem`,
    `${fontSizeScale * fontSizeScale}rem`,
    `${fontSizeScale * fontSizeScale * fontSizeScale}rem`,
    `${fontSizeScale * fontSizeScale * fontSizeScale * fontSizeScale}rem`,
  ],
  fontWeights: { bold: 700, light: 300, normal: 400 },
  letterSpacings: ['0.05em', '0.1em', '0.125em'],
  lineHeights: ['1.2em', '1.4em', '1.6em'],
  radii: ['2px', '5px', '8px'],
  shadows: [
    '0 3px 10px 0 rgba(164, 174, 185, 0.1)',
    '0 10px 25px rgba(164, 174, 185, 0.2)',
    '0 20px 50px rgba(11, 34, 56, 0.3)',
    '0 20px 60px rgba(0, 0, 0, 0.4)',
  ],
  sizes: {
    heights: { input: `calc(1.6em + 0.75rem * 2)` },
    maxWidths: { content: '1168px', form: '400px' },
  },
  space: [
    '0',
    '0.25rem',
    '0.375rem',
    '0.5rem',
    '0.75rem',
    '1.25rem',
    '2rem',
    '3.25rem',
    '5.25rem',
    '8.5rem',
  ],
  variants: {
    buttons: {
      primary: {
        '&:hover': { bg: 'accentDark' },
        bg: 'accent',
        borderColor: 'transparent',
        borderRadius: 1,
        borderStyle: 'solid',
        borderWidth: '1px',
        boxShadow: 1,
        color: 'white',
        fontSize: 2,
        fontWeight: 'bold',
        height: 'heights.input',
        letterSpacing: 0,
        px: 7,
        py: 4,
        textTransform: 'uppercase',
        transition: 'background-color 0.2s, border-color 0.2s, color 0.2s',
      },
    },
    inputs: {
      primary: {
        '&::placeholder': { color: 'grays.3' },
        '&:focus': { borderColor: 'primary' },
        bg: 'white',
        borderColor: 'grays.2',
        borderRadius: 1,
        borderStyle: 'solid',
        borderWidth: '1px',
        color: 'text.primary',
        px: 4,
        py: 4,
      },
    },
  },
  zIndices: [1, 2, 3, 4, 5],
};
