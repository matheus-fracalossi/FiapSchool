import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './types';
import {HomeTabs, SignIn} from '../../modules';
import {useAuth} from '../../core/contexts';

const {Navigator, Screen} = createNativeStackNavigator<RootStackParamList>();

const rootStackOptions = {headerShown: false};

export const RootStack = () => {
  const {isAuthenticated, finishedAuthenticating} = useAuth();

  if (!finishedAuthenticating) {
    return null;
  }

  return (
    <NavigationContainer>
      <Navigator screenOptions={rootStackOptions}>
        {isAuthenticated ? (
          <Screen name="HomeTabs" component={HomeTabs} />
        ) : (
          <Screen
            name="SignIn"
            component={SignIn}
            options={{
              animationTypeForReplace: !isAuthenticated ? 'pop' : 'push',
            }}
          />
        )}
      </Navigator>
    </NavigationContainer>
  );
};
