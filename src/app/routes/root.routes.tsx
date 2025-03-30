import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SignIn} from '../../modules/sign-In';
import {RootStackParamList} from './types';

const {Navigator, Screen} = createNativeStackNavigator<RootStackParamList>();

const rootStackOptions = {headerShown: false};

export const RootStack = () => {
  return (
    <NavigationContainer>
      <Navigator screenOptions={rootStackOptions}>
        <Screen name="SignIn" component={SignIn} />
      </Navigator>
    </NavigationContainer>
  );
};
