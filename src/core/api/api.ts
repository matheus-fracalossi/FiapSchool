import {API_URL} from '@env';
import axios, {AxiosResponse} from 'axios';
import {handleApiError} from './errorHandler';
import {ErrorHandlerResponse, ErrorHandlerType} from './types';

const onResponse = <T>(response: AxiosResponse<T>): T => {
  return response.data;
};

const onError = (error: ErrorHandlerType): Promise<ErrorHandlerResponse> => {
  const message = handleApiError(error);

  return Promise.reject({message, status: error.status});
};

export const setRequestToken = (userToken: string) =>
  api.interceptors.request.use(request => {
    request.headers.Authorization = `Bearer ${userToken}`;
    return request;
  });

export const configResponseInterceptor = (clearToken: () => Promise<void>) => {
  api.interceptors.response.use(
    response => response,
    async (error: ErrorHandlerResponse) => {
      if (!error.status || error.status === 401) {
        await clearToken();
      }

      return Promise.reject(error);
    },
  );
};

export const api = axios.create({
  baseURL: API_URL,
  timeout: 30000,
});

api.interceptors.response.use(onResponse, onError);
