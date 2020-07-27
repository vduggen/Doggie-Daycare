import React from 'react';

// import { Container } from './styles';
import TopNav from '../../components/TopNav/index';
import Banner from './Sections/Banner/index';
import About from './Sections/About/index';
import Valprop from './Sections/Valprop/index';

const Home: React.FC = () => {
  return (
    <>
      <TopNav />

      <Banner />
      <About />
      <Valprop />
    </>
  );
}

export default Home;
