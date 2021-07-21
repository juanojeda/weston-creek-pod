import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    breakpoint: {
      [key: string]: number;
    };
    iconSize: {
      [key: string]: number;
    };
  }
}
