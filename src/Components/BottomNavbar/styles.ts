import styled from 'styled-components/native';

import home from '../../assets/icons/home.svg';
import stats from '../../assets/icons/stats.svg';
import card from '../../assets/icons/card.svg';
import profile from '../../assets/icons/profile.svg';

export const Container = styled.View`
  width: 100%;
  height: 84px;

  flex-direction: row;

  align-items: center;
  justify-content: space-around;

  background-color: #ffffff;
`;

export const HomeIcon = styled(home)`
  width: 24px;
  height: 24px;
`;
export const StatsIcon = styled(stats)`
  width: 24px;
  height: 24px;
`;
export const CardIcon = styled(card)`
  width: 24px;
  height: 24px;
`;
export const ProfileIcon = styled(profile)`
  width: 24px;
  height: 24px;
`;

export const NavigationButton = styled.TouchableOpacity``;
