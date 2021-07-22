import { DieFive } from "@styled-icons/foundation";
import React, { FunctionComponent } from "react";
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
  activeSection: Route;
};

const NavigationWrapper = styled.nav`

`;

export const Navigation: FunctionComponent<NavigationProps> = ({activeSection}) => (<div />);