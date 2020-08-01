import React from 'react';

import { Container } from './styles';
import dogLove from '../../../../assets/dog_love_24x.svg';
import dogVet from '../../../../assets/dog_vet_24x.svg';
import dogStream from '../../../../assets/dog_stream_24x.svg';

const Section3: React.FC = () => {
  return (
    <Container>
      <header>
        <section id="text-top-Section3">
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
        </section>

        <h3>Sed perspiciatis omnis iste natus</h3>
      </header>

      <article id="row-about">
        <section className="column-about">
          <img src={dogLove} alt="love dog" />

          <div className="text-dir-column">
            <h6>24/7 Love & Care</h6>
            <p>
              At vero eos et accusamus et <br />
              iusto odio dignissimos ducimus <br />
              qui blanditiis praesentium <br />
              corrupti quos dolores et quas.
            </p>
          </div>
        </section>

        <section className="column-about">
          <img src={dogVet} alt="vet dog" />

          <div className="text-dir-column">
            <h6>On-site Veterinarian</h6>
            <p>
              Dolorem ipsum quia dolor sit <br />
              amet, consectetur, adipisci velit, <br />
              sed quia non numquam eius <br />
              modi tempora incidunt.
            </p>
          </div>
        </section>

        <section className="column-about">
          <img src={dogStream} alt="stream dog" />

          <div className="text-dir-column">
            <h6>Live-stream Cameras</h6>
            <p>
              Quis autem vel eum iure <br />
              reprehenderit qui in ea voluptate <br />
              velit esse quam nihil molestiae <br />
              consequatur illum.
            </p>
          </div>
        </section>
      </article>
    </Container>
  );
};

export default Section3;
