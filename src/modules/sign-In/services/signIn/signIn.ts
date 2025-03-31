import {api} from '../../../../core/api/api';
import {unmaskCpf} from '../../../../core/utils';
import {SignInParams, SignInResponse} from './types';

export const signIn = async (form: SignInParams): Promise<SignInResponse> => {
  form.cpf = unmaskCpf(form.cpf);

  return api.post<SignInResponse>('/sign-in', form);
};
