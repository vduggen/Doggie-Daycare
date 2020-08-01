import React from 'react';

import { Container, Blob } from './styles';
import Section7Bg from '../../../../assets/Section7Bg.png';
import Blob7 from '../../../../assets/Blob7.svg';
import avatar1 from '../../../../assets/avatar1.jpg';
import avatar2 from '../../../../assets/avatar2.png';

const Section7: React.FC = () => (
  <>
    <Blob src={Blob7} alt="Effect Bg" id="Blob7" />

    <Container>
      <article id="container-section7-externo">
        <article id="container-section7-interno">
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

            <h6>GALLERY & LIVE STREAMS</h6>
          </div>

          <h3>Check out our hard workers</h3>

          <div id="Gallery-Effect">
            <ul>
              <li>Gallery</li>
              <li className="active">Live stream: Yard 1</li>
              <li>Live stream: Yard 2</li>
              <li>Live stream: Yard 3</li>
            </ul>
          </div>
        </article>

        <img src={Section7Bg} alt="Dog Gallery" id="DogImage" />
      </article>

      <article id="container-testimonials">
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
                fill="#5D62B5"
              />
              <path
                d="M10.5905 10.4228L9.72474 9.55884L6.04053 13.2353L9.72474 16.9118L10.5905 16.0478L7.77825 13.2353L10.5905 10.4228Z"
                fill="#5D62B5"
              />
            </svg>

            <h6>Our CUSTOMERS</h6>
          </div>

          <h3>
            Illum qui dolorem
            <br />
            eum quo voluptas
            <br />
            ut distinctio
          </h3>
        </header>

        <div className="column">
          <div className="center">
            <p>
              “Lorem ipsum dolor sit amet,
              {' '}
              <br />
              consectetur adipiscing elit, sed
              {' '}
              <br />
              do eiusmod tempor incididunt
              {' '}
              <br />
              ut labore et dolore ex magna
              {' '}
              <br />
              aliqua. Ut enim illum ad minim
              {' '}
              <br />
              veniam, quis ea exercitation
              {' '}
              <br />
              ullamco cillum ut enim dolore.”
            </p>

            <footer>
              <img src={avatar1} alt="avatar1" />
              <h6>Cullen Bohannon</h6>
            </footer>
          </div>
        </div>

        <div className="column">
          <div className="center">
            <p>
              “Sed ut perspiciatis unde omnis
              {' '}
              <br />
              iste natus error sit voluptatem
              {' '}
              <br />
              accusantium doloremque
              {' '}
              <br />
              laudantium, totam rem aperiam,
              {' '}
              <br />
              eaque ipsa quae ab illo
              {' '}
              <br />
              inventore veritatis et quasi
              {' '}
              <br />
              ipsam voluptatem aspernatur.”
            </p>

            <footer>
              <img src={avatar2} alt="avatar2" />
              <h6>Jennifer Thomas</h6>
            </footer>
          </div>
        </div>
      </article>
    </Container>

  </>
);

export default Section7;
