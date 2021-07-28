import React from 'react';
import { Col, Container, Row } from 'react-awesome-styled-grid';
import styled from 'styled-components';
import { HEADER_HEIGHT } from '../components/Header';
import { Route } from '../components/Navigation';
import copy from "../copy/Masthead.json";

const HEADER_IMAGE = "https://images.unsplash.com/photo-1523881542461-305ab566932f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2700&q=80";

const MastheadWrapper = styled(Container)`
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
    left: 0;
    width: 100%;
    z-index: -1;
  }
`;

const Panel = styled.div`
  background: #fff;
  padding: 1.5rem;
`;

const ContactDetailGroup = styled.div``;
const Label = styled.h4``;
const Detail = styled.p``;

const CallToAction = styled.a``;

export const Masthead = () => {
  const { panel: { address, callToAction, phone } } = copy;
  return (
    <MastheadWrapper id={Route.HOME}>
      <Row>
        <Col xs={6} sm={6} md={6} lg={6} offset={{ md: 6, lg: 10 }}>
          <Panel>

            <ContactDetailGroup>
              <Label>{address.label}</Label>
              {address.body.map(line => <Detail>{line}</Detail>)}
            </ContactDetailGroup>

            <ContactDetailGroup>
              <CallToAction href={callToAction.url}>{callToAction.label}</CallToAction>
            </ContactDetailGroup>

            <ContactDetailGroup>
              <Label>{phone.label}</Label>
              <Detail>{phone.body}</Detail>
            </ContactDetailGroup>
          </Panel>
        </Col>
      </Row>
    </MastheadWrapper>
  );
};