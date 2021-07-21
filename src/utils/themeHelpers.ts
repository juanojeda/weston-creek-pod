import { StyledProps } from "styled-components";

export const getBreakpoint =
  (bpKey: string) =>
  <P>({ theme }: StyledProps<P>) =>
    `@media screen and (min-width: ${theme.breakpoint[bpKey]}px)`;
