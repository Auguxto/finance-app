import styled from 'styled-components/native';

import card from '../../../assets/card/card.png';

export const Container = styled.View`
  width: 300px;
  height: 200px;
`;

export const CardBackground = styled.ImageBackground.attrs({
  source: card,
  resizeMode: 'stretch',
})`
  flex: 1;
`;
