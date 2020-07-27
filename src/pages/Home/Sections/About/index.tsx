import React from 'react';

import { Container } from './styles';
import Blob from '../../../../assets/Blob2.svg'
import Dog from '../../../../assets/about-dog.png'
import OverlineMask from '../../../../assets/Overline-Mark.svg'

const About: React.FC = () => {
  return (
    <Container>
      <img src={ Blob } alt="Blog Effect" id="Blob-Effect-About"/>
      <img src={ Dog } alt="Dog Picture" id="Dog-bottom-About"/>

      <section id="container-text-about">
        <header>
          <div id="top-header-about">
            <img src={ OverlineMask } alt="Effect" />
            <h6>Who we are</h6>
          </div>

          <h3>
            Nemo enim ipsam voluptatem quia <br />
            voluptas in proident
          </h3>
        </header>

        <p>
          Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea <br />
          commodi consequatur. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae <br />
          consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.
        </p>
      </section>
    </Container>
  );
}

export default About;
