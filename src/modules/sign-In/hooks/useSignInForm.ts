import {useState} from 'react';
import {cpfMask} from '../../../core/utils';
import {UseSignInFormParams} from './types';
import {signIn} from '../services/signIn';

export const useSignInForm = ({onSuccess}: UseSignInFormParams) => {
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(false);

  const isSubmitFormDisabled = password === '' || cpf.length < 14;

  const handleApplyCpfMask = (input: string) => {
    const onlyNumbers = input.replace(/\D/g, '');

    if (onlyNumbers.length > 11) {
      return;
    }

    const maskedCpf = cpfMask(onlyNumbers);

    setCpf(maskedCpf);
  };

  const submitForm = async () => {
    if (isSubmitFormDisabled) {
      return;
    }

    setLoading(true);
    try {
      const response = await signIn({cpf, password});
      setError('');
      onSuccess(response);
    } catch (err) {
      setError(err as string);
    } finally {
      setLoading(false);
    }
  };

  return {
    isSubmitFormDisabled,
    cpf,
    handleApplyCpfMask,
    password,
    setPassword,
    error,
    isLoading,
    submitForm,
  };
};
