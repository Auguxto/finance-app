import React from 'react';
import {Text} from 'react-native';
import {CardBackground, Container} from './styles';

export type CardProps = {
  id: number;
  title: string;
  today: string;
  balance: string;
};

const Card = ({id, title, today, balance}: CardProps) => {
  return (
    <Container key={id}>
      <CardBackground>
        <Text>{title}</Text>
        <Text>{today}</Text>
        <Text>{balance}</Text>
      </CardBackground>
    </Container>
  );
};

export default Card;
