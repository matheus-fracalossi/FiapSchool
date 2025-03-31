export type AuthContextType = {
  userToken: string | null;
  isAuthenticated: boolean;
  finishedAuthenticating: boolean;
  storeUserToken: (token: string) => Promise<void>;
  clearUserToken: () => Promise<void>;
};
