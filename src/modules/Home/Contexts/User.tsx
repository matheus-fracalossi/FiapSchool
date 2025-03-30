import React, {
  createContext,
  useState,
  useContext,
  PropsWithChildren,
  useEffect,
} from 'react';
import {AlunoType, UserType} from './types';
import {fetchUser} from '../services/fetchUser';
import {Alert} from 'react-native';
import {FullScreenLoader} from '../../../core/components';
import {ErrorHandlerResponse} from '../../../core/api/types';

interface AuthContextType {
  user: UserType;
  student: AlunoType;
  setStudent: (student: AlunoType) => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const UserProvider = ({children}: PropsWithChildren) => {
  const [user, setUser] = useState<UserType | null>(null);
  const [student, setStudent] = useState<AlunoType | null>(null);
  const [isLoading, setLoading] = useState(false);

  const shouldShowLoader = isLoading || !user || !student;

  useEffect(() => {
    const handleFetchUser = async () => {
      setLoading(true);
      try {
        const response = await fetchUser();
        setUser(response);
        setStudent(response.alunos[0]);
      } catch (err) {
        const e = err as ErrorHandlerResponse;
        Alert.alert('Ops!', e.message);
      } finally {
        setLoading(false);
      }
    };

    handleFetchUser();
  }, []);

  if (shouldShowLoader) {
    return <FullScreenLoader size="large" color="cta" />;
  }

  return (
    <AuthContext.Provider value={{user, setStudent, student}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useUser = () => useContext(AuthContext) as AuthContextType;
