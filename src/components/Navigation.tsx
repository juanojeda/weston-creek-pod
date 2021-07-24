import React, { FunctionComponent } from "react";
import styled, { css } from "styled-components";
import { Col, Container } from "react-awesome-styled-grid";
import { Link } from "react-scroll";
import { HEADER_HEIGHT } from "./Header";

export enum Route {
  HOME = "home",
  OUR_TEAM = "our-team",
  SERVICES = "services",
  FAQS = "faqs",
  CONTACT = "contact",
};

interface NavigationProps {
  activeSection?: Route;
};

interface LinkProps {
  readonly $external?: boolean;
};

interface LinkConfig {
  href: string;
  text: string;
  isExternal?: boolean;
}

const NavigationContainer = styled(Container)`
  position: fixed;
  top: ${HEADER_HEIGHT};
  z-index: 1;
`;

const NavigationWrapper = styled(Col).attrs({
  as: "nav",
  xs: 6,
  sm: 2,
  md: 3,
  lg: 3
})`
  background: ${({ theme }) => theme.colour.primary};
  border-radius: 5px;
  padding: 1.5rem 0 2rem;
  width: 100%;
`;

const NavLink = styled(Link) <LinkProps>`
  border-radius: 1.5rem;
  color: ${({ theme }) => theme.colour.background};
  display: block;
  margin: .25rem 1rem;
  padding: .25rem 1rem;

  ${({ $external }) => $external && css`
    ::after {
      content: "";
      display: inline-block;
      outline: 1px solid red;
      width: 1rem;
      height: 1rem;
      margin-left: .5rem;
      vertical-align: baseline;
    }
  `}

  &.active {
    font-weight: bold;
    background: ${({ theme }) => theme.colour.secondary};
  };
`;

export const Navigation: FunctionComponent<NavigationProps> = ({ activeSection }) => {

  const links: LinkConfig[] = [
    { href: `${Route.HOME}`, text: "Home" },
    { href: `${Route.OUR_TEAM}`, text: "Our team" },
    { href: `${Route.SERVICES}`, text: "Services" },
    { href: `${Route.FAQS}`, text: "FAQs" },
    { href: "//google.com", text: "Bookings", isExternal: true },
    { href: `${Route.CONTACT}`, text: "Contact us" },
  ];

  return (
    <NavigationContainer>
      <NavigationWrapper>
        {links.map(({ href, text, isExternal = false }) => (
          <NavLink key={href} to={href} smooth duration={500} hashSpy spy $external={isExternal}>{text}</NavLink>
        ))}
      </NavigationWrapper>
    </NavigationContainer>
  );
}