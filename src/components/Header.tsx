import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Telephone } from '@styled-icons/foundation';
import { getBreakpoint } from '../utils/themeHelpers';

export const HEADER_HEIGHT = "8rem";
const INTERNAL_HEADER_HEIGHT = "7rem";

const Wrapper = styled.header`
  display: flex;
  gap: .5rem;
  height: ${INTERNAL_HEADER_HEIGHT};
  justify-content: space-between;
  padding-bottom: .5rem;
  padding-top: .5rem;
  position: fixed;
  width: 100%;

  &::before {
    content: "";
    display: block;
    flex-shrink: 0;
    width: 3rem;

    ${getBreakpoint("md")}{
      width: 200px;
    }
  }
`;

const LogoWrapper = styled.a.attrs({
  href: "/"
})`
  display: block;
  background: #ddd;
  width: 248px;
  height: 60px;
  flex-shrink: 1;
`;

const PhoneLink = styled.a`
  flex-shrink: 0;

  ${getBreakpoint("md")}{
    width: 200px;
  }
`;

const PhoneIcon = styled(Telephone)`
  fill: #000;
  width: 3rem;

  ${getBreakpoint("md")}{
    width: 2rem;
    margin-right: .5rem;
  }
`;

const PhoneNumber = styled.span`
  display: none;

  ${getBreakpoint("md")}{
    display: inline;
  }
`;

interface HeaderProps {
  showPhone?: boolean;
}

export const Header: FunctionComponent<HeaderProps> = ({ showPhone = true }) => {
  return (
    <Wrapper>
      <LogoWrapper>Logo</LogoWrapper>
      {showPhone && <>
        <PhoneLink href="tel:61262881234">
          <PhoneIcon />
          <PhoneNumber>02 6288 1234</PhoneNumber>
        </PhoneLink>
      </>}
    </Wrapper>
  );
};