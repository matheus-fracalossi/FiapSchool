import {api} from '../../../../core/api/api';
import {UserType} from '../../Contexts/types';

export const fetchUser = async () => api.get<UserType>('/me');
