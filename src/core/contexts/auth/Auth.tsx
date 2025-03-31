import React, {
  createContext,
  useState,
  useContext,
  PropsWithChildren,
  useEffect,
} from 'react';

import {readData, removeData, storeData} from '../../local-storage';
import {StoreKeys} from '../../local-storage/types';
import {configResponseInterceptor, setRequestToken} from '../../api/api';
import {AuthContextType} from './types';
import BootSplash from 'react-native-bootsplash';

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({children}: PropsWithChildren) => {
  const [userToken, setUserToken] = useState<string | null>(null);

  const isAuthenticated = !!userToken;
  const finishedAuthenticating = userToken !== null;

  const loadUser = async () => {
    const token = await readData(StoreKeys.USER_TOKEN);

    if (!token) {
      return setUserToken('');
    }
    setRequestToken(token);
    setUserToken(token);
  };

  const storeUserToken = async (token: string) => {
    await storeData(token, StoreKeys.USER_TOKEN);
    await loadUser();
  };

  const clearUserToken = async () => {
    await removeData(StoreKeys.USER_TOKEN);
    setUserToken(null);
  };

  useEffect(() => {
    if (finishedAuthenticating) {
      BootSplash.hide({fade: true});
    }
  }, [finishedAuthenticating]);

  useEffect(() => {
    const fetchInitialConfig = async () => {
      configResponseInterceptor(clearUserToken);
      await loadUser();
    };

    fetchInitialConfig();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        userToken,
        isAuthenticated,
        finishedAuthenticating,
        storeUserToken,
        clearUserToken,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext) as AuthContextType;
