import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';

import {
  CardIcon,
  Container,
  HomeIcon,
  NavigationButton,
  ProfileIcon,
  StatsIcon,
} from './styles';

type RootStackParamList = {
  Home: undefined;
  Stats: undefined;
  Card: undefined;
  Profile: undefined;
};

type NavigationProp = StackNavigationProp<RootStackParamList>;

const BottomNavbar = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <Container>
      <NavigationButton
        onPress={() => {
          navigation.navigate('Home');
        }}>
        <HomeIcon />
      </NavigationButton>
      <NavigationButton>
        <StatsIcon />
      </NavigationButton>
      <NavigationButton>
        <CardIcon />
      </NavigationButton>
      <NavigationButton>
        <ProfileIcon />
      </NavigationButton>
    </Container>
  );
};

export default BottomNavbar;
