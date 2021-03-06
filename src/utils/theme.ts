import { DefaultTheme } from "styled-components";

const getRemsFromPxRaw = (px: number): number => px / 16;
const getRemsFromPx = (px: number): string => `${getRemsFromPxRaw(px)}rem`;

const TEAL = "#0C9BAE";
const DARK_TEAL = "#076471";
const OFF_WHITE = "#F2F3F4";
const WHITE = "#fff";
const OFF_BLACK = "#3C4449";
const BLACK = "#000";

export const theme: DefaultTheme = {
  awesomegrid: {
    columns: {
      xs: 6,
      sm: 6,
      md: 12,
      lg: 16,
      xl: 16
    },
    breakpoints: {
      xs: 1,
      sm: getRemsFromPxRaw(600),
      md: getRemsFromPxRaw(900),
      lg: getRemsFromPxRaw(1200),
      xl: getRemsFromPxRaw(1200)
    }
  },
  iconSize: {
    xs: 1,
    sm: 2,
    md: 3
  },
  breakpoint: {
    sm: 600,
    md: 900
  },
  colour: {
    primary: TEAL,
    secondary: DARK_TEAL,
    foreground: OFF_BLACK,
    background: OFF_WHITE,
    headerSolid: WHITE,
    headerGradient:
      "linear-gradient(to bottom, rgba(255,255,255,.7), rgba(255,255,255,0))",
    shadow: "0 .25rem .25rem rgba(0,0,0,0.05)"
  },
  typography: {
    body: {
      fontSize: getRemsFromPx(16),
      lineHeight: getRemsFromPx(24),
      fontWeight: 400
    },
    bodyLarge: {
      fontSize: getRemsFromPx(24),
      lineHeight: getRemsFromPx(36),
      fontWeight: 400
    },
    h1: {
      fontSize: getRemsFromPx(56),
      lineHeight: getRemsFromPx(84),
      fontWeight: 200
    },
    h2: {
      fontSize: getRemsFromPx(32),
      lineHeight: getRemsFromPx(48),
      fontWeight: 700
    },
    h3: {
      fontSize: getRemsFromPx(24),
      lineHeight: getRemsFromPx(36),
      fontWeight: 200
    },
    h4: {
      fontSize: getRemsFromPx(18),
      lineHeight: getRemsFromPx(24),
      fontWeight: 700
    }
  }
};
