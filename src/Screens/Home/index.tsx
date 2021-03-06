import React from 'react';
import {StatusBar} from 'react-native';

import {Container} from './styles';

import Header from '../../Components/Home/Header';
import Cards from '../../Components/Home/Cards';
import Transactions from '../../Components/Home/Transactions';
import BottomNavbar from '../../Components/BottomNavbar';

const Home = () => {
  return (
    <Container>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <Header />
      <Cards />
      <Transactions />
      <BottomNavbar />
    </Container>
  );
};

export default Home;
