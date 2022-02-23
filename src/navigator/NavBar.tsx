import React from 'react';
import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {tabBarIcons} from '../helpers/tabBarIcons';
import {TransaccionesScreen} from '../views/TransaccionesScreen';
import {HistorialScreen} from '../views/HistorialScreen';
import {MonedasActualesScreen} from '../views/MonedasActualesScreen';

const Tab = createBottomTabNavigator();
export function NavBar() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: true,
        tabBarIcon: ({focused}) => {
          let iconName = tabBarIcons(route.name, focused);
          return iconName;
        },
        tabBarItemStyle: styles.navItem,
        tabBarStyle: styles.nav,
        tabBarActiveTintColor: 'blue',
        lazy: false,
      })}>
      <Tab.Screen
        options={{
          title: 'Usuario',
          tabBarLabelStyle: styles.label,
        }}
        name="TransaccionesScreen"
        component={TransaccionesScreen}
      />
      <Tab.Screen
        options={{
          title: 'Transacciones',
          tabBarLabelStyle: styles.label,
        }}
        name="HistorialScreen"
        component={HistorialScreen}
      />
      <Tab.Screen
        options={{title: 'Monedas actuales', tabBarLabelStyle: styles.label}}
        name="MonedasActualesScreen"
        component={MonedasActualesScreen}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  nav: {
    backgroundColor: '#F7F7F7',
    height: 53,
  },
  navItem: {
    paddingBottom: 6,
  },
  label: {
    fontSize: 12,
  },
});
