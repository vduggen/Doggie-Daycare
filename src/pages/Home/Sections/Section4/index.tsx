import React from 'react';

import { Container } from './styles';

const Section4: React.FC = () => {
  return (
    <Container>
      <section id="container-text">
        <div>
          <h3>
            Nemo enim ipsam
            <br />
            voluptatem quia voluptas
            <br />
            in proident
          </h3>

          <button type="button">Make an appointment</button>
        </div>
      </section>
    </Container>
  );
};

export default Section4;
