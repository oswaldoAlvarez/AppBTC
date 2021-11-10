import React, {ReactNode} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Navigator} from '../navigator/Navigator';
import {appTheme, ThemeBackground} from '../theme/appTheme';
import {ContextProvider} from '../context/ContextApi';

export const GeneralLayout = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar backgroundColor={ThemeBackground} barStyle="light-content" />
      <NavigationContainer theme={appTheme}>
        <GeneralState>
          <Navigator />
        </GeneralState>
      </NavigationContainer>
    </SafeAreaView>
  );
};

const GeneralState = ({children}: any) => {
  return <ContextProvider>{children}</ContextProvider>;
};
