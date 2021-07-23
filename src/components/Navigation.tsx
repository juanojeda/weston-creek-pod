import React, { FunctionComponent } from "react";
import { Col } from "react-awesome-styled-grid";
import styled from "styled-components";

export enum Route {
  HOME = "home",
  OUR_TEAM = "our-team",
  SERVICES = "services",
  FAQS = "faqs",
  BOOKINGS = "bookings",
  CONTACT = "contact",
};

interface NavigationProps {
  activeSection?: Route;
};

const NavigationWrapper = styled(Col).attrs({
  as: "nav",
  xs: 6,
  sm: 3,
  md: 3,
  lg: 3
})`
  outline: 1px solid red;
`;

export const Navigation: FunctionComponent<NavigationProps> = ({ activeSection }) => {

  return (<NavigationWrapper>Nav</NavigationWrapper>);
}