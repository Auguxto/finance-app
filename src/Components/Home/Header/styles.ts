import styled from 'styled-components/native';

import notification from '../../../assets/icons/notification.svg';
import notification_active from '../../../assets/icons/notification-active.svg';

export const Container = styled.View`
  padding: 24px;

  flex-direction: row;

  align-items: center;
  justify-content: space-between;

  background-color: #ffffff;
`;

export const HeaderTexts = styled.View`
  flex-direction: column;
`;

export const HeaderTitle = styled.Text`
  font-family: 'Ubuntu-Regular';
  font-size: 13px;
  line-height: 15px;

  color: #222222;

  opacity: 0.4;
`;

export const HeaderSubtitle = styled.Text`
  font-family: 'Ubuntu-Bold';
  font-size: 16px;
  line-height: 19px;
  text-align: center;

  color: #222222;
`;

export const HeaderButtons = styled.View`
  flex-direction: row;

  align-items: center;
`;

export const NotificationButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})``;

export const Notification = styled(notification)`
  width: 24px;
  height: 24px;
`;

export const NotificationActive = styled(notification_active)`
  width: 30px;
  height: 30px;
`;
