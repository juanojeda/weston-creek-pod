import React from 'react';
import styled from 'styled-components';
import { HEADER_HEIGHT } from '../components/Header';
import { Route } from '../components/Navigation';

const HEADER_IMAGE = "https://images.unsplash.com/photo-1523881542461-305ab566932f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2700&q=80";

const MastheadWrapper = styled.div`
  width: 100vw;
  height: 580px;
  padding-top: ${HEADER_HEIGHT};
  position: relative;

  &::after {
    background-image: url(${HEADER_IMAGE});
    background-size: cover;
    content: "";
    display: block;
    height: 100%;
    opacity: 0.5;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -1;
  }
`;

export const Masthead = () => {
  return (
    <MastheadWrapper id={Route.HOME}>
      Masthead
    </MastheadWrapper>
  );
};