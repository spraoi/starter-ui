/* eslint-disable prefer-destructuring, sort-keys */

import { darken, lighten } from 'polished';

/* base colors */

const blue = '#0663B3';
const blueDark = '#0B2238';
const blueLight = '#2695F8';
const green = '#3AC4AC';
const orange = '#F19B6F';
const red = '#E74C3C';
const whiteMoreTransparent = 'rgba(255, 255, 255, 0.1)';
const whiteTransparent = 'rgba(255, 255, 255, 0.4)';

const white = '#fefefe';
const gray1 = '#F5F6FA';
const gray2 = '#EBEEF5';
const gray3 = '#DFE4F0';
const gray4 = '#BDC6DF';
const gray5 = '#8190AD';
const gray6 = '#2e2e31';
const black = '#222';

/* theme colors */

const primary = blueDark;
const primaryDark = darken(0.1, blueDark);
const primaryLight = lighten(0.1, blueDark);

const accent = blueLight;
const accentDark = darken(0.1, blueLight);
const accentLight = lighten(0.1, blueLight);

const accentSecondary = blue;
const accentSecondaryDark = darken(0.1, blue);
const accentSecondaryLight = lighten(0.1, blue);

const textHeading = blueDark;
const textLink = accent;
const textPrimary = lighten(0.05, blueDark);

const colors = {
  accent,
  accentDark,
  accentLight,
  accentSecondary,
  accentSecondaryDark,
  accentSecondaryLight,
  black,
  body: gray2,
  border: gray4,
  borderSecondary: whiteMoreTransparent,
  error: red,
  grays: [gray1, gray2, gray3, gray4, gray5, gray6],
  primary,
  primaryDark,
  primaryLight,
  success: green,
  text: {
    heading: textHeading,
    link: textLink,
    primary: textPrimary,
    subtle: gray5,
    subtleSecondary: whiteTransparent,
  },
  warning: orange,
  white,
};

/* breakpoints */

const breakpoints = ['300px', '500px', '700px', '1200px', '1600px'];
breakpoints.xs = breakpoints[0];
breakpoints.sm = breakpoints[1];
breakpoints.md = breakpoints[2];
breakpoints.lg = breakpoints[3];
breakpoints.xl = breakpoints[4];

/* typography */

const baseFontSizesForBreakpoint = ['3.5vw', '3.5vw', '2.2vw', '15px', '15px'];

const fonts = {
  mono: 'Menlo, monospace',
  primary: 'Montserrat, sans-serif',
  secondary: 'Montserrat, sans-serif',
};

const fontSizeScale = 1.25;

const fontSizes = [
  `${1 / fontSizeScale / fontSizeScale / fontSizeScale}rem`,
  `${1 / fontSizeScale / fontSizeScale}rem`,
  `${1 / fontSizeScale}rem`,
  '1rem',
  `${fontSizeScale}rem`,
  `${fontSizeScale * fontSizeScale}rem`,
  `${fontSizeScale * fontSizeScale * fontSizeScale}rem`,
  `${fontSizeScale * fontSizeScale * fontSizeScale * fontSizeScale}rem`,
];

const fontWeights = { bold: 700, light: 300, normal: 400 };
const letterSpacings = ['0.05em', '0.1em', '0.125em'];
const lineHeights = ['1.2em', '1.4em', '1.6em'];

/* space */

const space = [
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
];
/* sizes */

const sizes = {
  heights: { input: `calc(${lineHeights[2]} + ${space[4]} * 2)` },
  maxWidths: { content: '1168px', form: '400px' },
};

/* border radii */

const radii = ['2px', '5px', '8px'];

/* box shadows */

const shadows = [
  '0 3px 10px 0 rgba(164, 174, 185, 0.1)',
  '0 10px 25px rgba(164, 174, 185, 0.2)',
  '0 20px 50px rgba(11, 34, 56, 0.3)',
  '0 20px 60px rgba(0, 0, 0, 0.4)',
];

/* z indexes */

const zIndices = [1, 2, 3, 4, 5];

/* variants */

const button = {
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
};

const variants = {
  buttons: {
    primary: { ...button },
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
};

/* theme */

export default {
  baseFontSizesForBreakpoint,
  breakpoints,
  colors,
  fontSizes,
  fontWeights,
  fonts,
  letterSpacings,
  lineHeights,
  radii,
  shadows,
  sizes,
  space,
  variants,
  zIndices,
};
