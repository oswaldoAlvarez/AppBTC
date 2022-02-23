import {useNavigation} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {FunctionComponent} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {ThemeBackground} from '../theme/appTheme';

export const BienvenidaScreen: FunctionComponent = () => {
  const navigation = useNavigation<StackNavigationProp<any, any>>();

  return (
    <View style={styles.container}>
      <View style={styles.btcLogin}>
        <Text style={styles.primaryText}>Bienvenido a AppBTC</Text>

        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.btnForm}
          onPress={() => navigation.navigate('NavBar')}>
          <Text style={styles.btnText}>Probar Aplicaión</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btcLogin: {
    height: '60%',
    width: '80%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  btnForm: {
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor: ThemeBackground,
  },
  primaryText: {
    fontSize: 30,
  },
  btnText: {
    color: 'white',
    fontSize: 16,
  },
});
