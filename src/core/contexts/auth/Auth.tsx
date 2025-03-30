import React, {
  createContext,
  useState,
  useContext,
  PropsWithChildren,
  useEffect,
} from 'react';

import {readData, removeData, storeData} from '../../local-storage';
import {StoreKeys} from '../../local-storage/types';

interface AuthContextType {
  userToken: string | null;
  isAuthenticated: boolean;
  storeUserToken: (token: string) => Promise<void>;
  clearUserToken: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({children}: PropsWithChildren) => {
  const [userToken, setUserToken] = useState<string | null>(null);

  const isAuthenticated = !!userToken;

  const storeUserToken = async (token: string) => {
    await storeData(token, StoreKeys.USER_TOKEN);
    setUserToken(token);
  };

  const clearUserToken = async () => {
    await removeData(StoreKeys.USER_TOKEN);
    setUserToken(null);
  };

  useEffect(() => {
    const loadUser = async () => {
      const token = await readData(StoreKeys.USER_TOKEN);

      if (token) {
        setUserToken(token);
      }
    };

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
