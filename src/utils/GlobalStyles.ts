import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyles = createGlobalStyle`
  ${normalize};
  * {
    box-sizing: border-box;
  }
  html {
    font-size: 16px;
    font-family: 'Nunito', sans-serif;
    background: ${({ theme }) => theme.colour.background};
  }

  a {
    text-decoration: none;
  }
`;
