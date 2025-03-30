export type SignInResponse = {
  token: string;
};

export type SignInParams = {
  cpf: string;
  password: string;
};

export type SignInErrorResponse = {
  message: string;
};
