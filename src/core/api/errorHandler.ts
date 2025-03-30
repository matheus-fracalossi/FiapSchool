import {ErrorHandlerType, HttpStatusCode} from './types';

const errorMessages = {
  [HttpStatusCode.BadRequest]:
    'Os dados enviados parecem estar incorretos. Verifique e tente novamente.',
  [HttpStatusCode.Unauthorized]:
    'Você não está autenticado. Por favor, faça login para continuar.',
  [HttpStatusCode.Forbidden]:
    'Você não tem permissão para acessar este recurso. Verifique suas permissões ou entre em contato com o administrador.',
  [HttpStatusCode.NotFound]:
    'O recurso solicitado não foi encontrado no servidor. Verifique a URL ou o recurso que você está tentando acessar.',
  [HttpStatusCode.InternalServerError]:
    'Algo deu errado no servidor. Tente novamente mais tarde. Se o problema persistir, entre em contato com o suporte.',
};

export const handleApiError = (error: ErrorHandlerType): string => {
  if (error.response) {
    const {status, data} = error.response;
    if (
      (status === HttpStatusCode.BadRequest ||
        status === HttpStatusCode.Unauthorized) &&
      data.message
    ) {
      return data.message;
    }

    return errorMessages[status as HttpStatusCode];
  }

  return errorMessages[HttpStatusCode.InternalServerError];
};
