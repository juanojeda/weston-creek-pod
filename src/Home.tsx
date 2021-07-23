import React from 'react';
import { Container } from 'react-awesome-styled-grid';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';

const Home = () => {
  return (
    <Container>
      <Header />
      <Navigation />
    </Container>
  );
}

export default Home;
