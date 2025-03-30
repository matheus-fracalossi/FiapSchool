import {SignInResponse} from '../services/signIn/types';

export type UseSignInFormParams = {
  onSuccess: (res: SignInResponse) => void;
};
