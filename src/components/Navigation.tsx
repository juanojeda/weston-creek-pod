import React, { FunctionComponent } from "react";
import styled, { css } from "styled-components";
import { Col, Container } from "react-awesome-styled-grid";
import { Link } from "react-scroll";
import { ExternalLinkAlt } from '@styled-icons/fa-solid';
import { HEADER_HEIGHT } from "./Header";
import { getFontSize, getFontWeight } from "../utils/themeHelpers";

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

interface LinkConfig {
  href: string;
  text: string;
  isExternal?: boolean;
}

const NavigationContainer = styled(Container)`
  position: fixed;
  top: ${HEADER_HEIGHT};
  left: 0rem;
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

const ExternalLink = styled(ExternalLinkAlt)`
  display: inline-block;
  vertical-align: top;
  margin-left: .25em;
  width: ${({ theme }) => theme.iconSize.xs}rem;
`;

const NavLink = styled(Link)`
  border-radius: 1.5rem;
  color: ${({ theme }) => theme.colour.background};
  cursor: pointer;
  display: block;
  font-size: ${getFontSize("h4")};
  margin: .25rem 1rem;
  padding: .25rem 1rem;

  &.active {
    font-weight: ${getFontWeight("h4")};
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
          <NavLink key={href} to={href} smooth duration={500} hashSpy spy >{text}
            {isExternal && <ExternalLink />}
          </NavLink>
        ))}
      </NavigationWrapper>
    </NavigationContainer>
  );
}