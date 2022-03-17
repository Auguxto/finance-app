import {Animated} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #ffffff;
`;

export const CardWrapper = styled.View<{width: number}>`
  align-items: center;
  width: ${props => props.width};
`;

export const Card = styled(Animated.View)<{
  width: number;
  height: number;
  background: string;
}>`
  width: ${props => (80 / 100) * props.width}px;
  height: ${props => (23 / 100) * props.height}px;

  border-radius: 10px;

  background-color: ${props => props.background};
`;

export const Title = styled.Text`
  font-family: 'Ubuntu-Bold';
  font-size: 16px;

  color: #ffffff;

  margin-top: 32px;
  margin-left: 16px;
`;

export const Today = styled.Text`
  font-family: 'Ubuntu-Regular';
  font-size: 11px;
  line-height: 13px;

  color: #ffffff;

  margin-top: 2px;
  margin-left: 16px;
`;

export const Balance = styled.Text`
  font-family: 'Ubuntu-Bold';
  font-size: 24px;
  line-height: 28px;

  color: #ffffff;

  position: absolute;
  bottom: 19px;
  left: 16px;
`;
