import React from 'react';

import { Container } from './styles';

const Banner: React.FC = () => (
  <Container>
    <section id="container-text-banner">
      <h1>
        Premier dog boarding,
        {' '}
        <br />
        daycare & day spa
      </h1>

      <button type="button">
        Make an appointment
      </button>
    </section>
  </Container>
);

export default Banner;
