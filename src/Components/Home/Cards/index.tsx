import React from 'react';
import rn from 'react-native';
import {ListRenderItem} from 'react-native';

import Card, {CardProps} from '../Card';

import {CardList, Container} from './styles';

const Cards = () => {
  const cards: CardProps[] = [
    {
      id: 1,
      title: 'Balance',
      today: '10, Mar 2022',
      balance: '$ 0,00',
    },
    {
      id: 2,
      title: 'Balance',
      today: '08, Sept 2022',
      balance: '$ 0,00',
    },
  ];

  const Item = ({item}: {item: CardProps}) => (
    <Card
      id={item.id}
      balance={item.balance}
      today={item.today}
      title={item.title}
    />
  );

  const renderItem: ListRenderItem<CardProps> = ({item}: {item: CardProps}) => (
    <Item item={item} />
  );

  return (
    <Container>
      <CardList
        data={cards}
        horizontal={true}
        keyExtractor={(item: CardProps) => item.id.toString()}
        renderItem={renderItem}
      />
    </Container>
  );
};

export default Cards;
