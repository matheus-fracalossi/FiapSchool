import {renderHook, act, waitFor} from '@testing-library/react-native';
import {useSignInForm} from '../useSignInForm';

const mockUseSignInFormProps = {
  onSuccess: jest.fn(),
};

const mockSignInReturn = {
  token: 'test',
};

jest.mock('../../services/signIn', () => ({
  signIn: jest.fn(
    () =>
      new Promise(resolve => setTimeout(() => resolve(mockSignInReturn), 100)),
  ),
}));

const setup = () => {
  const {result} = renderHook(() => useSignInForm(mockUseSignInFormProps));

  return {
    result,
    fillCpf: (cpf: string) => act(() => result.current.handleApplyCpfMask(cpf)),
    fillPassword: (password: string) =>
      act(() => result.current.setPassword(password)),
    submit: async () =>
      act(() => {
        result.current.submitForm();
      }),
  };
};

describe('useSignInForm()', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('When filling form:', () => {
    it('Should return masked CPF', () => {
      const {result, fillCpf} = setup();

      fillCpf('12345678901');

      expect(result.current.cpf).toBe('123.456.789-01');
    });

    describe('isSubmitFormDisabled: ', () => {
      it('Should return true when form is empty', () => {
        const {result} = setup();

        expect(result.current.isSubmitFormDisabled).toBeTruthy();
      });

      it('Should return true when only CPF is empty', () => {
        const {result, fillPassword} = setup();

        fillPassword('123456789');

        expect(result.current.isSubmitFormDisabled).toBeTruthy();
      });

      it('Should return true when only password is empty', () => {
        const {result, fillCpf} = setup();

        fillCpf('12345678901');

        expect(result.current.isSubmitFormDisabled).toBeTruthy();
      });

      it('Should return true when CPF is under 11 chars (14 with mask)', () => {
        const {result, fillCpf, fillPassword} = setup();

        fillCpf('123456789');
        fillPassword('123456789');

        expect(result.current.isSubmitFormDisabled).toBeTruthy();
      });

      it('Should return false when form is correct', () => {
        const {result, fillCpf, fillPassword} = setup();

        fillCpf('12345678901');
        fillPassword('123456789');

        expect(result.current.isSubmitFormDisabled).toBeFalsy();
      });
    });
  });

  describe('When submiting form', () => {
    it('Should toggle isLoading during submission', async () => {
      const {result, submit, fillCpf, fillPassword} = setup();

      fillCpf('12345678901');
      fillPassword('123456789');

      await submit();

      await waitFor(() => {
        expect(result.current.isLoading).toBeTruthy();
      });

      await waitFor(() => {
        expect(result.current.isLoading).toBeFalsy();
      });
    });

    it('should handle successful form submission', async () => {
      const {result, submit, fillCpf, fillPassword} = setup();

      fillCpf('12345678901');
      fillPassword('123456789');

      await submit();

      await waitFor(() => {
        expect(mockUseSignInFormProps.onSuccess).toHaveBeenCalledWith(
          mockSignInReturn,
        );
        expect(result.current.error).toBe('');
      });
    });
  });
});
