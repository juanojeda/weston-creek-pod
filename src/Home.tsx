import React from 'react';
import { Container } from 'react-awesome-styled-grid';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { ContactUs } from './sections/ContactUs';
import { FAQs } from './sections/FAQs';
import { Masthead } from './sections/Masthead';
import { OurTeam } from './sections/OurTeam';
import { Services } from './sections/Services';

const Home = () => {
  return (
    <Container>
      <Header />
      <Navigation />
      <Masthead />
      <OurTeam />
      <Services />
      <FAQs />
      <ContactUs />
    </Container>
  );
}

export default Home;
