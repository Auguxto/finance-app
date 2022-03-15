import React from 'react';
import {StatusBar} from 'react-native';

import {Container} from './styles';

import Header from '../../Components/Home/Header';
import Cards from '../../Components/Home/Cards';

const Home = () => {
  return (
    <Container>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <Header />
      <Cards />
    </Container>
  );
};

export default Home;
