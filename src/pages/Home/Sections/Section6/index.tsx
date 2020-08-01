import React from 'react';

import { Container } from './styles';

const Section6: React.FC = () => {
  return (
    <Container>
      <article id="container-section6">
        <section className="esq">
          <div id="container-form">
            <h3>Make an appointment</h3>

            <div className="row">
              <input type="text" name="name" id="name" placeholder="Name" />
              <input type="email" name="email" id="email" placeholder="Email" />
            </div>

            <div className="row">
              <input
                type="text"
                name="number"
                id="number"
                placeholder="Phone Number"
              />
              <input
                type="text"
                name="service"
                id="service"
                placeholder="Select Service"
              />
            </div>

            <textarea
              name="about"
              id="about"
              cols={51}
              rows={10}
              placeholder="Tell us about your puppers include his/her name"
            ></textarea>

            <button type="submit">Make an Appointment</button>
          </div>
        </section>

        <section className="dir">
          <h4>Maxime placeat facere possimus omnis </h4>
          <h1>5,700+</h1>
          <h6>customers served</h6>
        </section>
      </article>
    </Container>
  );
};

export default Section6;
