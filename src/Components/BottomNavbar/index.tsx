import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {RootStackParamList} from '../../Screens/RootStackParams';

import {
  CardIcon,
  Container,
  HomeIcon,
  NavigationButton,
  ProfileIcon,
  StatsIcon,
} from './styles';

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
      <NavigationButton
        onPress={() => {
          navigation.navigate('Stats');
        }}>
        <StatsIcon />
      </NavigationButton>
      <NavigationButton
        onPress={() => {
          navigation.navigate('Card');
        }}>
        <CardIcon />
      </NavigationButton>
      <NavigationButton
        onPress={() => {
          navigation.navigate('Profile');
        }}>
        <ProfileIcon />
      </NavigationButton>
    </Container>
  );
};

export default BottomNavbar;
