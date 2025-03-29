import {useState} from 'react';
import {
  Column,
  Image,
  Input,
  SafeAreaBackground,
} from '../../../core/components';
import {cpfMask} from '../../../core/utils';

export const SignIn = () => {
  const [cpf, setCpf] = useState('');
  const [password, setPassord] = useState('');

  const applyMask = (input: string) => {
    const onlyNumbers = input.replace(/\D/g, '');

    const maskedCpf = cpfMask(onlyNumbers);

    setCpf(maskedCpf);
  };

  return (
    <SafeAreaBackground gap={80} p="48px 48px 0px">
      <Image
        source={require('../../../core/assets/images/logo.png')}
        width="100%"
        resizeMode="contain"
        als="center"
      />
      <Column gap={50}>
        <Input
          title="CPF"
          value={cpf}
          onChangeText={applyMask}
          maxLength={14}
        />
        <Input
          title="SENHA"
          value={password}
          onChangeText={setPassord}
          secureTextEntry
        />
      </Column>
    </SafeAreaBackground>
  );
};
