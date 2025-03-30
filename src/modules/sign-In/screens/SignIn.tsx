import {
  Button,
  Column,
  Image,
  Input,
  SafeAreaBackground,
  Text,
} from '../../../core/components';
import {useAuth} from '../../../core/contexts';

import {useSignInForm} from '../hooks';

export const SignIn = () => {
  const {storeUserToken} = useAuth();

  const {
    cpf,
    handleApplyCpfMask,
    password,
    setPassword,
    error,
    isLoading,
    submitForm,
    isSubmitFormDisabled,
  } = useSignInForm({
    onSuccess: res => {
      storeUserToken(res.token);
    },
  });

  return (
    <SafeAreaBackground>
      <Column p="48px 48px 0px" gap={80} flex={1}>
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
            onChangeText={handleApplyCpfMask}
            maxLength={14}
          />
          <Input
            title="SENHA"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          {error && (
            <Column align="center">
              <Text weight="medium" color="cta">
                {error}
              </Text>
            </Column>
          )}
        </Column>
      </Column>
      <Button
        label="FAZER LOGIN"
        loading={isLoading}
        onPress={submitForm}
        disabled={isSubmitFormDisabled}
      />
    </SafeAreaBackground>
  );
};
