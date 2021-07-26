import { FontConfig, StyledProps } from "styled-components";

export const getBreakpoint =
  (bpKey: string) =>
  <P>({ theme }: StyledProps<P>) =>
    `@media screen and (min-width: ${theme.breakpoint[bpKey]}px)`;

const getFontProp =
  (prop: keyof FontConfig, style: string) =>
  <P>({ theme }: StyledProps<P>): string | number =>
    theme.typography[style][prop];

export const getFontSize = (style: string) => getFontProp("fontSize", style);
export const getFontLineHeight = (style: string) =>
  getFontProp("lineHeight", style);
export const getFontWeight = (style: string) =>
  getFontProp("fontWeight", style);
