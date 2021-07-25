import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Telephone } from '@styled-icons/foundation';
import { getBreakpoint } from '../utils/themeHelpers';
import logo from "../img/logo2.png";
import { Container } from 'react-awesome-styled-grid';

export const HEADER_HEIGHT = "9rem";
const INTERNAL_HEADER_HEIGHT = "8rem";

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
  background: ${({ $transparent, theme }) => $transparent ? theme.colour.headerGradient : theme.colour.headerSolid};
  box-shadow: ${({ $transparent, theme }) => $transparent ? "none" : theme.colour.shadow};
  gap: .5rem;
  height: ${INTERNAL_HEADER_HEIGHT};
  padding-bottom: .5rem;
  padding-top: .5rem;
  position: fixed;
  width: 100%;
  z-index: 1;
`;

const WrapperInner = styled(Container)`
  align-items: center;
  display: flex;
  justify-content: space-between;

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
  color: ${({ theme }) => theme.colour.secondary};
  flex-shrink: 0;
  text-align: right;
  visibility: ${({ $showPhone }) => $showPhone ? "visible" : "hidden"};
`;

const PhoneIcon = styled(Telephone)`
  vertical-align: bottom;
  width: ${({ theme }) => theme.iconSize.md}rem;

  ${getBreakpoint("md")}{
    width: ${({ theme }) => theme.iconSize.sm}rem;
    margin-right: .5rem;
  }
`;

const PhoneNumber = styled.span`
  display: none;
  font-size: ${({ theme }) => theme.typography.bodyLarge.fontSize}rem;
  line-height: ${({ theme }) => theme.typography.bodyLarge.lineHeight}rem;
  font-weight: ${({ theme }) => theme.typography.bodyLarge.fontWeight};

  ${getBreakpoint("md")}{
    display: inline;
  }
`;

export const Header: FunctionComponent<HeaderProps> = ({ showPhone = true }) => {
  return (
    <Wrapper $transparent={!showPhone}>
      <WrapperInner>
        <LogoWrapper>
          <Logo src={logo} alt="Weston Creek Podiatry logo" />
        </LogoWrapper>
        <PhoneLink href="tel:61262881234" $showPhone={showPhone}>
          <PhoneIcon />
          <PhoneNumber>02 6288 1234</PhoneNumber>
        </PhoneLink>
      </WrapperInner>
    </Wrapper>
  );
};