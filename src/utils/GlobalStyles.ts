import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyles = createGlobalStyle`
  ${normalize};
  html {
    font-size: 16px;
    font-family: 'Nunito', sans-serif;
  }
`;
