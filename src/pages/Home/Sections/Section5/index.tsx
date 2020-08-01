import React from 'react';

import { Container } from './styles';
import Blob5 from '../../../../assets/Blob5.svg';
import Boarding from '../../../../assets/dog_boarding_24x.svg';
import Collar from '../../../../assets/dog_collar_24x.svg';
import Daycare from '../../../../assets/dog_daycare_24x.svg';
import Food from '../../../../assets/dog_food_24x.svg';
import Grooming from '../../../../assets/dog_grooming_24x.svg';
import Training from '../../../../assets/dog_training_24x.svg';

const Section5: React.FC = () => (
  <Container>
    <img src={Blob5} alt="Effect BG" id="Blob5" />

    <article>
      <header id="text-top-Section5">
        <div className="top">
          <svg
            width="28"
            height="27"
            viewBox="0 0 28 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.2718 6.61768L9.71338 8.17282L14.7755 13.2353L9.71338 18.2978L11.2718 19.853L17.9034 13.2353L11.2718 6.61768Z"
              fill="#5D62B5"
            />
            <path
              d="M10.5905 10.4228L9.72474 9.55884L6.04053 13.2353L9.72474 16.9118L10.5905 16.0478L7.77825 13.2353L10.5905 10.4228Z"
              fill="#5D62B5"
            />
          </svg>

          <h6>our promise to you</h6>
        </div>

        <h3>Sed perspiciatis omnis iste natus</h3>
      </header>

      <section className="row">
        <div className="column">
          <div className="center">
            <img src={Boarding} alt="Dog SVG" />
            <h6>Pet Boarding (No Cages)</h6>
            <p>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium corrupti quos dolores et quas.
            </p>
          </div>
        </div>

        <div className="column">
          <div className="center">
            <img src={Daycare} alt="Dog SVG" />
            <h6>Pet Daycare</h6>
            <p>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium corrupti quos dolores et quas.
            </p>
          </div>
        </div>

        <div className="column">
          <div className="center">
            <img src={Grooming} alt="Dog SVG" />
            <h6>Pet Day Spa & Grooming</h6>
            <p>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium corrupti quos dolores et quas.
            </p>
          </div>
        </div>
      </section>

      <section className="row">
        <div className="column">
          <div className="center">
            <img src={Food} alt="Dog SVG" />
            <h6>Custom Meal Plans</h6>
            <p>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium corrupti quos dolores et quas.
            </p>
          </div>
        </div>

        <div className="column">
          <div className="center">
            <img src={Training} alt="Dog SVG" />
            <h6>Pet Training</h6>
            <p>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium corrupti quos dolores et quas.
            </p>
          </div>
        </div>

        <div className="column">
          <div className="center">
            <img src={Collar} alt="Dog SVG" />
            <h6>Shop Our Store!</h6>
            <p>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium corrupti quos dolores et quas.
            </p>
          </div>
        </div>
      </section>

      <button type="button">Learn More</button>
    </article>
  </Container>
);

export default Section5;
