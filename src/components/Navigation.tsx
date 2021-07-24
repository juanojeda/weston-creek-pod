import React, { FunctionComponent } from "react";
import { Col } from "react-awesome-styled-grid";
import styled, { css } from "styled-components";

export enum Route {
  HOME = "#home",
  OUR_TEAM = "#our-team",
  SERVICES = "#services",
  FAQS = "#faqs",
  BOOKINGS = "//google.com",
  CONTACT = "#contact",
};

interface NavigationProps {
  activeSection?: Route;
};

interface LinkProps {
  readonly $external?: boolean;
  readonly $active?: boolean
};

interface LinkConfig {
  href: string;
  text: string;
  isExternal?: boolean;
}

const NavigationWrapper = styled(Col).attrs({
  as: "nav",
  xs: 6,
  sm: 3,
  md: 3,
  lg: 3
})`
  background: ${({ theme }) => theme.colour.primary};
  border-radius: 5px;
  padding: 1.5rem 0 2rem;
`;

const Link = styled.a <LinkProps>`
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

  ${({ $active }) => $active && css`
    font-weight: bold;
  `};
`;

export const Navigation: FunctionComponent<NavigationProps> = ({ activeSection }) => {

  const links: LinkConfig[] = [
    { href: Route.HOME, text: "Home" },
    { href: Route.OUR_TEAM, text: "Our team" },
    { href: Route.SERVICES, text: "Services" },
    { href: Route.FAQS, text: "FAQs" },
    { href: "//google.com", text: "Bookings", isExternal: true },
    { href: Route.CONTACT, text: "Contact us" },
  ];

  return (
    <NavigationWrapper>
      {links.map(({ href, text, isExternal = false }) => (
        <Link href={href} $external={isExternal}>{text}</Link>
      ))}
    </NavigationWrapper>
  );
}