import React from 'react';

import { Container } from './styles';
import Logo from '../../assets/Logo.svg';

// Icons
import { MdAccessTime, MdExpandMore } from 'react-icons/md';
import { FiPhone } from 'react-icons/fi';
import { AiOutlineSearch } from 'react-icons/ai';
import { GrCart } from 'react-icons/gr';

const TopNav: React.FC = () => {
  return (
    <Container>
      <article id="container-top">
        <section className="esq">
          <img src={ Logo } alt="Logo" />
        </section>

        <section className="dir">
          <div id="hours">
            <MdAccessTime />

            <div className="text-infos">
              <h4>Boarding Hours</h4>
              <h4>Mon - Sat: 7:00 am - 6:00 pm</h4>
            </div>
          </div>

          <div id="call">
            <FiPhone />

            <div className="text-infos">
              <h4>Call Uss</h4>
              <h4>(555) Pup-Cares</h4>
            </div>
          </div>

          <button>Make an Appointment</button>
        </section>
      </article>

      <nav>
        <section className="esq">
          <a href="#">
            Services
            <MdExpandMore />
          </a>
          <a href="#">Specials</a>
          <a href="#">Facilities</a>
          <a href="#">Reviews</a>
          <a href="#">
            Shop
            <MdExpandMore />
          </a>
          <a href="#">About</a>
        </section>

        <section className="dir">
          <AiOutlineSearch id="search-icon"/>
          <GrCart id="cart-icon"/>
          <span id="badge">5</span>
        </section>
      </nav>
    </Container>
  );
}

export default TopNav;
