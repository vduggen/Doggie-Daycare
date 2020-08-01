import React from 'react';

import TopNav from '../../components/TopNav/index';
import Footer from '../../components/Footer/index';
import Banner from './Sections/Banner/index';
import About from './Sections/About/index';
import Section3 from './Sections/Section3/index';
import Section4 from './Sections/Section4/index';
import Section5 from './Sections/Section5/index';
import Section6 from './Sections/Section6/index';
import Section7 from './Sections/Section7/index';
import Section8 from './Sections/Section8/index';
import Section9 from './Sections/Section9/index';

const Home: React.FC = () => (
  <>
    <TopNav />

    <Banner />
    <About />
    <Section3 />
    <Section4 />
    <Section5 />
    <Section6 />
    <Section7 />
    <Section8 />
    <Section9 />

    <Footer />
  </>
);

export default Home;
