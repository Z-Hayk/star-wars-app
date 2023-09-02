import React, { FunctionComponent } from 'react';
import { StatusBar } from 'react-native';
import { enableScreens } from 'react-native-screens';
import { NavigationContainer } from '@react-navigation/native';
import { PopUpMessage } from 'components';
import { useSelector } from 'react-redux';
import { popUpMessageRef } from 'services';
import { WelcomeScreens, HomeScreens } from 'navigation';
import { navigationRef } from 'utils';
import { RootState } from './types';

enableScreens();

export const AppContainer: FunctionComponent = () => {
  const initialScreen = useSelector((state: RootState) => state.app.initialScreen);

  let Navigation = WelcomeScreens;
  initialScreen === 'Home' && (Navigation = HomeScreens);

  return (
    <NavigationContainer ref={navigationRef}>
      <StatusBar backgroundColor="transparent" translucent={true} barStyle="dark-content" />
      <Navigation />

      <PopUpMessage ref={popUpMessageRef} />
    </NavigationContainer>
  );
};
