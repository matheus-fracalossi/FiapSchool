import {API_URL} from '@env';
import axios, {AxiosInstance, AxiosResponse} from 'axios';
import {handleApiError} from './errorHandler';
import {ErrorHandlerType} from './types';

const onResponse = <T>(response: AxiosResponse<T>): T => {
  return response.data;
};

const onError = (error: ErrorHandlerType) => {
  const errorMessage = handleApiError(error);
  return Promise.reject(errorMessage);
};

const setupInterceptors = (instance: AxiosInstance): AxiosInstance => {
  instance.interceptors.response.use(onResponse, onError);

  return instance;
};

const baseApi = axios.create({
  baseURL: API_URL,
  timeout: 30000,
});

export const api = setupInterceptors(baseApi);
