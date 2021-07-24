import React, { FunctionComponent } from 'react';
import styled from "styled-components";
import { HEADER_HEIGHT } from './Header';

const Wrapper = styled.div`
  min-height: 100vh;
  padding-top: ${HEADER_HEIGHT};
`;

interface SectionWrapperProps {
  id: string;
}

export const SectionWrapper: FunctionComponent<SectionWrapperProps> = ({ children, id }) => {
  return (
    <Wrapper id={id}>
      {children}
    </Wrapper>
  );
};