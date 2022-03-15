import React from 'react';

import {
  Container,
  HeaderButtons,
  HeaderSubtitle,
  HeaderTexts,
  HeaderTitle,
  Notification,
  NotificationActive,
  NotificationButton,
} from './styles';

const Header = () => {
  const [notificationActive, setNotificationActive] = React.useState(false);

  return (
    <Container>
      <HeaderTexts>
        <HeaderTitle>Bem vindo de volta,</HeaderTitle>
        <HeaderSubtitle>Victor Augusto</HeaderSubtitle>
      </HeaderTexts>
      <HeaderButtons>
        <NotificationButton
          onPress={() => setNotificationActive(!notificationActive)}>
          {notificationActive ? <NotificationActive /> : <Notification />}
        </NotificationButton>
      </HeaderButtons>
    </Container>
  );
};

export default Header;
