import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {BienvenidaScreen} from '../views/BienvenidaScreen';
import {NavBar} from './NavBar';

const Stack = createStackNavigator();

export const Navigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <>
        <Stack.Screen name="BienvenidaScreen" component={BienvenidaScreen} />
        <Stack.Screen name="NavBar" component={NavBar} />
      </>
    </Stack.Navigator>
  );
};
