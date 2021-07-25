import { DefaultTheme } from "styled-components";

const getRemsFromPx = (px: number): number => px / 16;

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
      sm: getRemsFromPx(600),
      md: getRemsFromPx(900),
      lg: getRemsFromPx(1200),
      xl: getRemsFromPx(1200)
    }
  },
  iconSize: {
    sm: 3,
    md: 4
  },
  breakpoint: {
    sm: 600,
    md: 900
  },
  colour: {
    primary: "teal",
    secondary: "darkslategrey",
    foreground: "black",
    background: "white",
    headerSolid: "#fff",
    headerGradient:
      "linear-gradient(to bottom, rgba(255,255,255,.7), rgba(255,255,255,0))",
    shadow: "0 .25rem .25rem rgba(0,0,0,0.05)"
  },
  typography: {
    body: {
      fontSize: getRemsFromPx(16),
      lineHeight: getRemsFromPx(24),
      fontWeight: "regular"
    },
    bodyLarge: {
      fontSize: getRemsFromPx(24),
      lineHeight: getRemsFromPx(36),
      fontWeight: "regular"
    },
    h1: {
      fontSize: getRemsFromPx(56),
      lineHeight: getRemsFromPx(84),
      fontWeight: "extraLight"
    },
    h2: {
      fontSize: getRemsFromPx(32),
      lineHeight: getRemsFromPx(48),
      fontWeight: "bold"
    },
    h3: {
      fontSize: getRemsFromPx(24),
      lineHeight: getRemsFromPx(36),
      fontWeight: "extraLight"
    },
    h4: {
      fontSize: getRemsFromPx(18),
      lineHeight: getRemsFromPx(24),
      fontWeight: "bold"
    }
  }
};
