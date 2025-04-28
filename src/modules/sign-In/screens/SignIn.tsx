import { ScrollView } from 'react-native';
import {
  Button,
  Column,
  Image,
  Input,
  SafeAreaBackground,
  Text,
} from '../../../core/components';
import { useAuth } from '../../../core/contexts';
import { useSignInForm } from '../hooks';

export const SignIn = () => {
  const { storeUserToken } = useAuth();

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
      <ScrollView bounces={false}>
        <Column p="48px 48px 32px" gap={80} flex={1}>
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
              title="PASSWORD"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
            {error && (
              <Text weight="medium" color="cta" textAlign="center">
                {error}
              </Text>
            )}
          </Column>
        </Column>
      </ScrollView>
      <Button
        label="SIGN IN"
        loading={isLoading}
        onPress={submitForm}
        disabled={isSubmitFormDisabled}
      />
    </SafeAreaBackground>
  );
};
