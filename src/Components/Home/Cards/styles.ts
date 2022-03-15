import styled from 'styled-components/native';
import {FlatList} from 'react-native';

import {CardProps} from '../Card';

export const Container = styled.View`
  margin-left: 24px;
  margin-top: 30px;

  background-color: #ffffff;
`;

export const CardList = styled(FlatList as new () => FlatList<CardProps>)``;
