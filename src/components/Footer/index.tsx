import React from 'react';

import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiOutlineInstagram,
  AiFillYoutube,
  AiOutlineMail,
} from 'react-icons/ai';
import { FiMapPin, FiPhone } from 'react-icons/fi';
import { MdTimer } from 'react-icons/md';
import { Container, Navbar } from './styles';
import LogoPB from '../../assets/Logo-Placeholder-5.svg';

const Footer: React.FC = () => (
  <>
    <Container>
      <section id="container-footer">
        <div className="column">
          <img src={LogoPB} alt="Logo" />
          <p>
            This is a blurb about the company
            {' '}
            <br />
            sed do eiusmod tempor incididunt ut
            {' '}
            <br />
            labore et dolore ex magna aliqua.
          </p>

          <div id="social-networks-icons">
            <AiFillFacebook />
            <AiFillTwitterSquare />
            <AiOutlineInstagram />
            <AiFillYoutube />
          </div>
        </div>

        <div className="column">
          <p>Explore Links</p>

          <div>
            <ol>
              <li><a href="# ">About</a></li>
              <li><a href="# ">Services</a></li>
              <li><a href="# ">Specials</a></li>
              <li><a href="# ">Estimates</a></li>
            </ol>

            <ol>
              <li><a href="# ">Reviews</a></li>
              <li><a href="# ">Shop</a></li>
              <li><a href="# ">Careers</a></li>
              <li><a href="# ">FAQs</a></li>
            </ol>
          </div>
        </div>

        <div className="column">
          <p>Contact</p>

          <div>
            <FiMapPin />
            <span>
              321 Pikes Place Parkway
              Seattle, WA 54321
            </span>
          </div>

          <div>
            <FiPhone />
            <span>(555) 765-4321</span>
          </div>

          <div>
            <AiOutlineMail />
            <span>Info@company.com</span>
          </div>

          <div>
            <MdTimer />
            <span>Mon - Sat:  7:000 am - 6:00 pm</span>
          </div>
        </div>
      </section>
    </Container>

    <Navbar>
      <div>
        <p>Tagline lorem ipsum dolor sit amet, consectetur adipiscing eiusmod</p>
        <p>© 2018 Company. Privacy Policy | Terms & Conditions</p>
      </div>
    </Navbar>
  </>
);

export default Footer;
