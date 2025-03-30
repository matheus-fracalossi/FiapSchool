import {API_URL} from '@env';
import axios, {AxiosResponse} from 'axios';
import {handleApiError} from './errorHandler';
import {ErrorHandlerType} from './types';

const onResponse = <T>(response: AxiosResponse<T>): T => {
  return response.data;
};

const onError = (error: ErrorHandlerType) => {
  const errorMessage = handleApiError(error);
  return Promise.reject(errorMessage);
};

export const api = axios.create({
  baseURL: API_URL,
  timeout: 30000,
});

api.interceptors.response.use(onResponse, onError);
