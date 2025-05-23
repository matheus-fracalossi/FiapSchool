import {AxiosError} from 'axios';

export type ApiErrorReturn = {message: string};

export type ErrorHandlerType = AxiosError<ApiErrorReturn>;

export type ErrorHandlerResponse = {message: string; status: HttpStatusCode};

export enum HttpStatusCode {
  BadRequest = 400,
  Unauthorized = 401,
  Forbidden = 403,
  NotFound = 404,
  InternalServerError = 500,
}
