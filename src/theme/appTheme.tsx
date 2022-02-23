import {DefaultTheme} from '@react-navigation/native';
import {StyleSheet} from 'react-native';

export const ThemeBackground = '#294195';

export const globalStyles = StyleSheet.create({
  globalMargin: {
    marginHorizontal: 16,
    marginVertical: 16,
  },
  container: {
    flex: 1,
  },
});

export const appTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'lightgray',
  },
};
