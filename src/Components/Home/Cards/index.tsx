/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Animated, View, Dimensions} from 'react-native';

import {Balance, Card, CardWrapper, Container, Title, Today} from './styles';

const {width, height} = Dimensions.get('screen');

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Balance',
    today: 'Today, 08 Sept 2022',
    balance: '$ 6,420.00',
    background: '#031A6E',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Balance',
    today: 'Today, 08 Sept 2022',
    balance: '$ 1,020.00',
    background: '#E89494',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Balance',
    today: 'Today, 08 Sept 2022',
    balance: '$ 920.00',
    background: '#49CBB3',
  },
];

const WIDTH = width;

const Indicator = ({scrollX}: {scrollX: Animated.Value}) => {
  return (
    <View style={{flexDirection: 'row', alignSelf: 'center', marginTop: 22}}>
      {DATA.map((_, i) => {
        const inputRange = [(i - 1) * WIDTH, i * WIDTH, (i + 1) * WIDTH];
        const scale = scrollX.interpolate({
          inputRange,
          outputRange: [0.8, 1.4, 0.8],
          extrapolate: 'clamp',
        });
        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.4, 1, 0.4],
          extrapolate: 'clamp',
        });
        return (
          <Animated.View
            key={`indicator-${i}`}
            style={{
              height: 10,
              width: 10,
              borderRadius: 5,
              backgroundColor: '#031A6E',
              margin: 5,
              marginBottom: 24,
              transform: [{scale}],
              opacity,
            }}
          />
        );
      })}
    </View>
  );
};

const Cards = () => {
  const scrollX = React.useRef(new Animated.Value(0)).current;

  return (
    <Container>
      <Animated.FlatList
        data={DATA}
        keyExtractor={item => item.id}
        horizontal
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {contentOffset: {x: scrollX}},
            },
          ],
          {useNativeDriver: true},
        )}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        renderItem={({item, index}) => {
          const inputRange = [
            (index - 1) * WIDTH,
            index * WIDTH,
            (index + 1) * WIDTH,
          ];
          const scale = scrollX.interpolate({
            inputRange,
            outputRange: [0.4, 1, 0.4],
            extrapolate: 'clamp',
          });
          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.7, 1, 0.7],
            extrapolate: 'clamp',
          });

          return (
            <CardWrapper width={width}>
              <Card
                key={item.id}
                width={width}
                height={height}
                background={item.background}
                style={{opacity, transform: [{scale}]}}>
                <Title>{item.title}</Title>
                <Today>{item.today}</Today>
                <Balance>{item.balance}</Balance>
              </Card>
            </CardWrapper>
          );
        }}
      />
      <Indicator scrollX={scrollX} />
    </Container>
  );
};

export default Cards;
