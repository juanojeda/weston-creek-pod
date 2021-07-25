import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Telephone } from '@styled-icons/foundation';
import { getBreakpoint } from '../utils/themeHelpers';
import logo from "../img/logo2.png";

export const HEADER_HEIGHT = "8rem";
const INTERNAL_HEADER_HEIGHT = "7rem";

interface HeaderProps {
  showPhone?: boolean;
}

interface WrapperProps {
  $transparent: boolean;
}

interface PhoneLinkProps {
  $showPhone: boolean;
}

const Wrapper = styled.header<WrapperProps>`
  align-items: center;
  background: ${({ $transparent, theme }) => $transparent ? theme.colour.headerGradient : theme.colour.headerSolid};
  box-shadow: ${({ $transparent, theme }) => $transparent ? "none" : theme.colour.shadow};
  display: flex;
  gap: .5rem;
  height: ${INTERNAL_HEADER_HEIGHT};
  justify-content: space-between;
  padding-bottom: .5rem;
  padding-top: .5rem;
  position: fixed;
  width: 100%;
  z-index: 1;

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
  width: 248px;
  flex-shrink: 1;
`;

const Logo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const PhoneLink = styled.a<PhoneLinkProps>`
  flex-shrink: 0;
  visibility: ${({ $showPhone }) => $showPhone ? "visible" : "hidden"};

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

export const Header: FunctionComponent<HeaderProps> = ({ showPhone = true }) => {
  return (
    <Wrapper $transparent={!showPhone}>
      <LogoWrapper>
        <Logo src={logo} alt="Weston Creek Podiatry logo" />
      </LogoWrapper>
      <PhoneLink href="tel:61262881234" $showPhone={showPhone}>
        <PhoneIcon />
        <PhoneNumber>02 6288 1234</PhoneNumber>
      </PhoneLink>
    </Wrapper>
  );
};