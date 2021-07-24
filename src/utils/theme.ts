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
    background: "white"
  }
};
