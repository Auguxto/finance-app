import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './src/Screens/Home';
import History from './src/Screens/History';
import Card from './src/Screens/Card';
import Profile from './src/Screens/Profile';
import Stats from './src/Screens/Stats';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Stats" component={Stats} />
        <Stack.Screen name="Card" component={Card} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="History" component={History} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
