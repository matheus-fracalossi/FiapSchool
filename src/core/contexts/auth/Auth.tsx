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

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({children}: PropsWithChildren) => {
  const [userToken, setUserToken] = useState<string | null>(null);

  const isAuthenticated = !!userToken;

  const loadUser = async () => {
    const token = await readData(StoreKeys.USER_TOKEN);

    if (token) {
      setRequestToken(token);
      setUserToken(token);
    }
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
    configResponseInterceptor(clearUserToken);
    loadUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{userToken, isAuthenticated, storeUserToken, clearUserToken}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext) as AuthContextType;
