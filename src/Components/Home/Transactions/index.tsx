import React from 'react';
import {Animated, StyleSheet} from 'react-native';

import {
  Container,
  DropboxIcon,
  End,
  Header,
  HeaderButton,
  HeaderButtonText,
  Icon,
  Middle,
  SpotifyIcon,
  Title,
  Transaction,
  TransactionAmount,
  TransactionDate,
  TransactionDescription,
  TransactionTitle,
  WorkIcon,
  YoutubeIcon,
} from './styles';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Dropbox plan',
    amount: '$144.00',
    type: 'withdrawal',
    description: 'Subscription',
    date: '08 Sept 2022',
    icon: 'dropbox',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Spotify Subsc',
    amount: '$24.00',
    type: 'withdrawal',
    description: 'Subscription',
    date: '10 Sept 2022',
    icon: 'spotify',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Youtube Adsense',
    amount: '$232.00',
    type: 'deposit',
    description: 'Income',
    date: '14 Sept 2022',
    icon: 'youtube',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d74',
    title: 'Freelance Work',
    amount: '$421.00',
    type: 'deposit',
    description: 'Income',
    date: '25 Sept 2022',
    icon: 'work',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d589',
    title: 'Freelance Work',
    amount: '$210.00',
    type: 'deposit',
    description: 'Income',
    date: '26 Sept 2022',
    icon: 'work',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e321312',
    title: 'Youtube Adsense',
    amount: '$232.00',
    type: 'deposit',
    description: 'Income',
    date: '29 Sept 2022',
    icon: 'youtube',
  },
];

const Transactions = () => {
  function getIcon(icon: string) {
    switch (icon) {
      case 'dropbox':
        return <DropboxIcon />;
      case 'spotify':
        return <SpotifyIcon />;
      case 'youtube':
        return <YoutubeIcon />;
      case 'work':
        return <WorkIcon />;
    }
  }

  return (
    <Container>
      <Header>
        <Title>Recent Transactions</Title>
        <HeaderButton>
          <HeaderButtonText>See All</HeaderButtonText>
        </HeaderButton>
      </Header>
      <Animated.FlatList
        style={styles.transaction}
        data={DATA}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return (
            <Transaction>
              <Icon>{getIcon(item.icon)}</Icon>
              <Middle>
                <TransactionTitle>{item.title}</TransactionTitle>
                <TransactionDescription>
                  {item.description}
                </TransactionDescription>
              </Middle>
              <End>
                <TransactionAmount type={item.type}>
                  {item.amount}
                </TransactionAmount>
                <TransactionDate>{item.date}</TransactionDate>
              </End>
            </Transaction>
          );
        }}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  transaction: {
    marginTop: 16,
    marginBottom: 24,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
});

export default Transactions;
