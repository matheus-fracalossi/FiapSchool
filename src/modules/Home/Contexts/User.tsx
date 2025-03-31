import React, {
  createContext,
  useState,
  useContext,
  PropsWithChildren,
  useEffect,
} from 'react';
import {AlunoType, UserType} from './types';
import {fetchUser} from '../../../modules/Home/services/fetchUser';
import {Alert, FlatList, Modal} from 'react-native';
import {
  Background,
  Card,
  Column,
  FullScreenLoader,
  Link,
  Text,
} from '../../../core/components';
import {ErrorHandlerResponse} from '../../../core/api/types';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface AuthContextType {
  user: UserType;
  student: AlunoType;
  setStudent: (student: AlunoType) => void;
  openModal: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const UserProvider = ({children}: PropsWithChildren) => {
  const {top, bottom} = useSafeAreaInsets();

  const [user, setUser] = useState<UserType | null>(null);
  const [student, setStudent] = useState<AlunoType | null>(null);
  const [isLoading, setLoading] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);

  const shouldShowLoader = isLoading || !user || !student;

  const closeModal = () => setModalVisible(false);
  const openModal = () => setModalVisible(true);

  const handlerSelectStudent = (studentParams: AlunoType) => {
    setStudent(studentParams);
    closeModal();
  };

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
    <AuthContext.Provider value={{user, student, setStudent, openModal}}>
      {children}
      <Modal visible={isModalVisible} animationType="fade">
        <Background p={`${top + 20}px 20px ${bottom + 20}px`} gap={32}>
          <Column>
            <Link
              color="cta"
              textAlign="right"
              weight="bold"
              onPress={closeModal}>
              FECHAR{' '}
              <Text color="cta" size="medium" weight="bold">
                X
              </Text>
            </Link>
          </Column>
          <Column flex={1} justify="center" gap={32}>
            <Text textAlign="center" size="large">
              Escolha o perfil{'\n'}que você quer visualizar
            </Text>
            <FlatList
              data={user.alunos}
              contentContainerStyle={{gap: 16}}
              renderItem={({item: studentInfo}) => (
                <Card
                  disabled={studentInfo.rm === student.rm}
                  onPress={() => handlerSelectStudent(studentInfo)}
                  selected={studentInfo.rm === student.rm}
                  title={`${studentInfo.primeiroNome}  ${studentInfo.sobrenome}`}
                  className={`${studentInfo.turma} - RM ${studentInfo.rm} - ${studentInfo.periodo}`}
                />
              )}
            />
          </Column>
        </Background>
      </Modal>
    </AuthContext.Provider>
  );
};

export const useUser = () => useContext(AuthContext) as AuthContextType;
