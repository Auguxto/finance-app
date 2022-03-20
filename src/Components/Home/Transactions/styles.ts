import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';

import work from '../../../assets/icons/work.svg';
import youtube from '../../../assets/icons/youtube.svg';
import spotify from '../../../assets/icons/spotify.svg';
import dropbox from '../../../assets/icons/dropbox.svg';

export const Container = styled.View`
  flex: 1;

  padding: 24px;

  background-color: #f9fafc;
`;

export const Header = styled.View`
  flex-direction: row;

  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-family: 'Ubuntu-Bold';
  font-size: 14px;
  line-height: 16px;

  color: #000000;
`;

export const HeaderButton = styled.TouchableOpacity``;

export const HeaderButtonText = styled.Text`
  font-family: 'Ubuntu-Bold';
  font-size: 14px;
  line-height: 16px;

  color: #031a6e;
`;

export const Transaction = styled.View`
  width: 100%;
  height: 75px;

  flex-direction: row;
  align-items: center;

  padding: 16px;

  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-bottom-color: #efefef;
  margin-bottom: 2px;
`;

export const Icon = styled.View`
  width: 38px;
  height: 38px;

  align-items: center;
  justify-content: center;

  border-radius: 8px;

  background: rgba(3, 26, 110, 0.1);
`;

export const WorkIcon = styled(work)``;
export const YoutubeIcon = styled(youtube)``;
export const SpotifyIcon = styled(spotify)``;
export const DropboxIcon = styled(dropbox)``;

export const Middle = styled.View`
  margin-left: 14px;
`;

export const TransactionTitle = styled.Text`
  font-family: 'Ubuntu-Bold';
  font-size: 14px;
  line-height: 16px;

  color: rgba(34, 34, 34, 1);
`;

export const TransactionDescription = styled.Text`
  font-family: 'Ubuntu-Regular';
  font-size: 12px;
  line-height: 14px;

  color: rgba(34, 34, 34, 0.5);
`;

export const End = styled.View`
  flex: 1;
  align-items: flex-end;
`;

export const TransactionAmount = styled.Text<{type: string}>`
  font-family: 'Ubuntu-Bols';
  font-size: 14px;
  line-height: 16px;

  color: ${props => (props.type === 'deposit' ? '#34AA44' : '#e6492d')};
`;

export const TransactionDate = styled.Text`
  font-family: 'Ubuntu-Regular';
  font-size: 12px;
  line-height: 14px;

  color: rgba(34, 34, 34, 0.5);
`;
