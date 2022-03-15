import React from 'react';
import {StatusBar} from 'react-native';
import {
  Container,
  Header,
  HeaderButtons,
  HeaderSubtitle,
  HeaderTexts,
  HeaderTitle,
  Notification,
  NotificationActive,
  NotificationButton,
} from './styles';

const Home = () => {
  const [notificationActive, setNotificationActive] = React.useState(false);

  return (
    <Container>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <Header>
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
      </Header>
    </Container>
  );
};

export default Home;
