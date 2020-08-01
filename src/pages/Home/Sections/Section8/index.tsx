import React from 'react';

import { Container } from './styles';
import Dog from '../../../../assets/DogSection8.png';
import Duckling from '../../../../assets/dog_duckling_24x.svg';
import House from '../../../../assets/dog_house_24px.svg';
import Leash from '../../../../assets/dog_leash_24x.svg';
import Food from '../../../../assets/dog_food_bowl_24x.svg';

const Section8: React.FC = () => (
  <Container>
    <section id="container-section8">
      <img src={Dog} alt="Dog Effect" id="ImgDogSection8" />

      <header>
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
              fill="#fff"
            />
            <path
              d="M10.5905 10.4228L9.72474 9.55884L6.04053 13.2353L9.72474 16.9118L10.5905 16.0478L7.77825 13.2353L10.5905 10.4228Z"
              fill="#fff"
            />
          </svg>

          <h6>Our CUSTOMERS</h6>
        </div>

        <h3>
          Nemo enim ipsam
          {' '}
          <br />
          voluptatem quia voluptas
        </h3>
      </header>

      <div className="row">
        <div className="column">
          <img src={Duckling} alt="Icon" />
          <div className="text">
            <h3>3,700</h3>
            <p>Puppy Baths</p>
          </div>
        </div>

        <div className="column">
          <img src={House} alt="Icon" />
          <div className="text">
            <h3>4,500</h3>
            <p>Dogs Boarded</p>
          </div>
        </div>

        <div className="column">
          <img src={Leash} alt="Icon" />
          <div className="text">
            <h3>2,900</h3>
            <p>Pups Trained</p>
          </div>
        </div>

        <div className="column">
          <img src={Food} alt="Icon" />
          <div className="text">
            <h3>12k+</h3>
            <p>Meals Served</p>
          </div>
        </div>
      </div>
    </section>
  </Container>
);

export default Section8;
