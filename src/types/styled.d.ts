import "styled-components";

declare module "styled-components" {
  export interface FontConfig {
    fontSize: string;
    lineHeight: string;
    fontWeight: number;
  }
  export interface DefaultTheme {
    awesomegrid: {
      columns: {
        [key: string]: number;
      };
      breakpoints: {
        [key: string]: number;
      };
    };
    breakpoint: {
      [key: string]: number;
    };
    iconSize: {
      [key: string]: number;
    };
    colour: {
      [key: string]: string;
    };
    typography: {
      [key: string]: FontConfig;
    };
  }
}
