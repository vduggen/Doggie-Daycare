import React from 'react';

// import { Container } from './styles';
import TopNav from '../../components/TopNav/index';
import Banner from '../../pages/Home/Sections/Banner/index';

const Home: React.FC = () => {
  return (
    <>
      <TopNav />

      <Banner />
    </>
  );
}

export default Home;
