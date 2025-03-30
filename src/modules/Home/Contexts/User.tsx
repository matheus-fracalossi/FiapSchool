import React, {
  createContext,
  useState,
  useContext,
  PropsWithChildren,
  useEffect,
} from 'react';
import {UserType} from './types';
import {fetchUser} from '../services/fetchUser';
import {Alert} from 'react-native';
import {FullScreenLoader} from '../../../core/components';
import {ErrorHandlerResponse} from '../../../core/api/types';

interface AuthContextType {
  user: UserType | null;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const UserProvider = ({children}: PropsWithChildren) => {
  const [user, setUser] = useState<UserType | null>(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const handleFetchUser = async () => {
      setLoading(true);
      try {
        const response = await fetchUser();
        setUser(response);
      } catch (err) {
        const e = err as ErrorHandlerResponse;
        setUser(null);
        Alert.alert('Ops!', e.message);
      } finally {
        setLoading(false);
      }
    };

    handleFetchUser();
  }, []);

  return (
    <AuthContext.Provider value={{user}}>
      {isLoading ? <FullScreenLoader size="large" color="cta" /> : children}
    </AuthContext.Provider>
  );
};

export const useUser = () => useContext(AuthContext) as AuthContextType;
